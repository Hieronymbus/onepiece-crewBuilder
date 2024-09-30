import mongoose from "mongoose";

const crewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Pirate model
        required: true,
        ref: 'Pirate'
    },
    ship: {
        type: String,
        required: true
    },
    flagImage: {
        type: String,
        required: true
    },
    members: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Pirate' 
    }]
}, {
    timestamps: true
});

const Crew = mongoose.model("Crew", crewSchema);

export default Crew ;