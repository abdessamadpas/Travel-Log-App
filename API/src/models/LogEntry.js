const  mongoose = require('mongoose');
const { Schema, model } = mongoose;


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
    Comment: String,
    Rating: { 
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    Image: String,
    Latitude: { ...requiredNumber,
        min: -90, 
        max: 90 
    },
    Longitude: { ...requiredNumber, 
        min: -180, 
        max: 180 
    },

}, { timestamps: true });

module.exports = model('LogEntry', LogEntrySchema);