import mongoose from "mongoose";
import Pirate from "../models/pirate.model.js";
import path from 'path';


const __dirname = path.resolve()

////create a new pirate
export const createPirate = async (request, response) => {

    const pirate = request.body;
    
    const imageFile = request.files.image;

    const uploadPath = path.join( __dirname, 'backend', 'public', 'uploads', imageFile.name );

    imageFile.mv(uploadPath);

    pirate.image = path.join('static', 'uploads', imageFile.name)

    const newPirate = new Pirate(pirate);

    // todo: update status code handling in case the wrong value is entered 

    try {
        await newPirate.save();
        response.status(201).json({success: true, data: newPirate});
    } catch (error) {
        console.error("Error:", error);
        response.status(500).json({succes: false, message: "Server Error. Failure to create."});
    };

};

//// retreive a list of all pirates 
export const readPirates = async (request, response) => {

    try {
        const pirates = await Pirate.find({});
        response.status(200).json({succes: true, data: pirates});
    } catch (error) {
        console.error("Error finding pirates", error.message);
        response.status(404).json({success: false, message:"Server Error"});
    };

};

//// update a pirates info
export const updatePirate = async (request, response) => {

    const pirateId = request.params.pirateId; 
    const pirate = request.body;

    try {
        const updatedPirate = await Pirate.findByIdAndUpdate(pirateId, pirate, {new: true});
        response.status(200).json({success: true, data: updatedPirate});
    } catch (error) {
        console.error("Error:" , error);
        response.status(500).json({success: true, message: "Server Error"});
    };
}

////delete a pirate
export const deletePirate = async (request, response) => {

    const pirateId = request.params.pirateId;
    
    try {
        await Pirate.findByIdAndDelete(pirateId);
        response.status(200).json({success: true, message:"Pirate Deleted"});
    } catch (error) {
        console.error("Error", error);
        response.status(500).json({success: false, message:"Server Error"});
    };
}