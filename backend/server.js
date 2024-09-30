import express, { request, response } from "express";
import { configDotenv } from "dotenv";

import { connectToDB } from "./config/db.js";
import Crew from "./models/crew.model.js";
import Pirate from "./models/pirate.model.js";


configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//// PIRATES /////
//////////////////

app.post("/api/pirates", async (request,response) => {

    const pirate = request.body;
    const newPirate = new Pirate(pirate);

    try {
        await newPirate.save();
        response.status(201).json({success: true, data: newPirate});
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({succes: false, message: "Server Error. Failure to create."});
    };
})

app.get("/api/pirates", async (request, response) => {

    try {
        const pirates = await Pirate.find({});
        response.status(200).json({succes: true, data: pirates});
    } catch (error) {
        console.error("Error finding pirates", error.message);
        response.status(404).json({success: false, message:"Server Error"});
    };
});

app.put("/api/pirates/:pirateId", async (request, response) => {

    const pirateId = request.params.pirateId; 
    const pirate = request.body;

    try {
        const updatedPirate = await Pirate.findByIdAndUpdate(pirateId, pirate, {new: true});
        response.status(200).json({success: true, data: updatedPirate});
    } catch (error) {
        console.error("Error:" , error);
        response.status(500).json({success: true, message: "Server Error"});
    };
});

app.delete("/api/pirates/:pirateId", async (request, response) => {

    const pirateId = request.params.pirateId;
    
    try {
        await Pirate.findByIdAndDelete(pirateId);
        response.status(200).json({success: true, message:"Pirate Deleted"});
    } catch (error) {
        console.error("Error", error);
        response.status(500).json({success: false, message:"Server Error"});
    };
});


//// CREWS /////
////////////////

app.post("/api/crews", async (request, response) => {
    
    const { name, ship, flagImage, captain } = request.body;
    
    try {

        const theCaptain = await Pirate.findById(captain);
        const newCrew = new Crew({
            name,
            ship,
            captain,
            flagImage,
            members: [captain]
        });

        const savedCrew = await newCrew.save();

        theCaptain.rank = 'Captain';
        theCaptain.crew = savedCrew._id; 
        await theCaptain.save();

        response.status(201).json({ succes: true, data: savedCrew});
    } catch (error) {
        console.error("Error creating crew", error);
        response.status(500).json({success: false, message: "Server Error"});
    };
});

app.get("/api/crews", async (request, response) => {
    try {
        const crews = await Crew.find({});
        response.status(200).json({success: true, data: crews});
    } catch (error) {
        console.error("Error finding Crews:", error.message);
        response.status(404).json({success: true, message:"Server Error"});
    }   
});

//// add a pirate to crew
app.post("/api/crews/:crewId/pirates", async (request, response) => {

    const { crewId } = request.params;
    const { pirateId } = request.body;

    try {
        const crew = await Crew.findById(crewId);

        const pirate = await Pirate.findById(pirateId);

        if (pirate.crew) {
            return response.status(400).json({ message: 'Pirate is already part of a crew' });
        }

        crew.members.push(pirateId)
        await crew.save()

        pirate.crew = crew._id;
        pirate.rank = 'Crew Member';

        await pirate.save();
        response.status(200).json({
            success: true,
            message: 'Pirate successfully added to crew',
            crew,
            pirate
        });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    };

});

app.put("/api/crews/:crewId", async (request, response) => {

    const crewId = request.params.crewId;
    const crew = request.body

    try {
        const updatedCrew = await Crew.findByIdAndUpdate(crewId, crew, { new: true });
        response.status(200).json({success: true, data: updatedCrew}); 
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({success: false, message: "Server Error"});
    };
});

app.delete("/api/crews/:crewId", async (request, response) => {

    const crewId = request.params.crewId

    try {
        await Crew.findByIdAndDelete(crewId);
        response.status(200).json({succes: true, message:"Crew deleted"});
    } catch (error) {
        console.error("Error:", error)
        response.status(500).json({succes: false, message:"Server Error"});
    }
});

app.listen(PORT,() => {
    connectToDB();
    console.log("Connected at http://localhost:" + PORT);
});

