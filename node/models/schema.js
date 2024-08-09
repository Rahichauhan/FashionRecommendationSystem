const mongoose = require('mongoose');

// Define form schema as a subdocument
const formSchema = new mongoose.Schema({
    spiritanimal: {
        type: String,
        required: true,
        enum: ['Lion', 'Eagle', 'Wolf', 'Bear', 'Other']
    },
    age: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    bodyType: {
        type: String,
        required: true,
        enum: ['Slim', 'Athletic', 'Curvy']
    },
    weather: {
        type: String,
        required: true
    },
    occassion: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true,
        enum: ['Day', 'Night']
    }
});

// Define user schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    forms: [formSchema]  
});


const userModel = mongoose.model('User', userSchema);

module.exports = { userModel };
