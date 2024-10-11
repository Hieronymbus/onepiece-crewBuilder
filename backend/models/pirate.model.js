import mongoose from "mongoose";

const pirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    epithet: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    combatStyle: {
        type: String,
        enum: ['Hand to Hand', 'Swordsman', 'Sniper', 'Support', 'Healer'], // Use enum to restrict values
        required: true
    },
    role: {
        type: String,
        enum: ['Navigator', 'Cook', 'Lookout', 'Helmsman', 'Crew Leader', 'shipwright', 'doctor', 'boatswain'], // Define possible positions
        required: true
    },
    rank: {
        type: String,
        enum: ['Captain', 'First Mate', 'Second Mate', 'Crew Member'], // Define possible ranks
        default: null // Initially set to null since a pirate may not belong to a crew
    },
    bounty: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    crew: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Crew' ,
        default: null // Initially set to null since a pirate may not belong to a crew
    }
}, {
    timestamps: true
});


const Pirate = mongoose.model("Pirate", pirateSchema);

export default Pirate