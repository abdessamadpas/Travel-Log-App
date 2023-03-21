import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;


const requiredString = {
    type: String,
    required: true,
};

const requiredNumber = {
    type: Number,
    required: true,
};



const LogEntrySchema = new Schema({
    Title: requiredString,
    Description: String,
    Comments: String,
    rating: { 
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    image: String,
    latitude: { ...requiredNumber,
        min: -90, 
        max: 90 
    },
    longitude: { ...requiredNumber, 
        min: -180, 
        max: 180 
    },

}, { timestamps: true });

module.exports = model('LogEntry', LogEntrySchema);