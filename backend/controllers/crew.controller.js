import mongoose from "mongoose";
import Crew from "../models/crew.model";


////create a crew
export const createCrew = async (request, response) => {
    
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
};

//// retreive list of crews
export const readCrews = async (request, response) => {
    
    try {
        const crews = await Crew.find({});
        response.status(200).json({success: true, data: crews});
    } catch (error) {
        console.error("Error finding Crews:", error.message);
        response.status(404).json({success: true, message:"Server Error"});
    }   
};

//// add a pirate to crew
export const addPirateToCrew = async (request, response) => {

    const { crewId } = request.params;
    const { pirateId } = request.body;

    try {

        const crew = await Crew.findById(crewId);
        const pirate = await Pirate.findById(pirateId);

        if(crew.members.length > 10) {

            return response.status(400).json( {success: false, message:"Crew is full" } )
        }


        if (pirate.crew) {
            return response.status(400).json({success: false,  message: 'Pirate is already part of a crew' });
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
};

////remove pirate from crew 
export const removePirateFromCrew = async (request, response) => {

    const { crewId, pirateId } = request.params 

    try {
        const crew = await Crew.findById(crewId);
        const pirate = await Pirate.findById(pirateId);

        crew.members = crew.members.filter( member => member.toString() !== pirateId )
        await crew.save();

        pirate.rank = null;
        pirate.crew = null;
        await pirate.save();

        response.status(200).json( {
            success: true, 
            message: 'Pirate successfully removed from crew',
            crew,
            pirate 
        });

    } catch (error) {
        console.error("Error:", error)
        response.status(500).json({ succes:false, message: "Server Error" })
    }

};

////update a crews info
export const updateCrew = async (request, response) => {

    const { crewId } = request.params;
    const crew = request.body;

    try {
        const updatedCrew = await Crew.findByIdAndUpdate(crewId, crew, { new: true });
        response.status(200).json({success: true, data: updatedCrew}); 
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({success: false, message: "Server Error"});
    };
};

////delete a crew
export const deleteCrew = async (request, response) => {

    const crewId = request.params.crewId;

    try {
        await Crew.findByIdAndDelete(crewId);
        response.status(200).json({succes: true, message:"Crew deleted"});
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({succes: false, message:"Server Error"});
    }
}