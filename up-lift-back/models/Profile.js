const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    website: {
        type: [String]
    },
    location: {
        type: String
    },
    occupation: {
        type: String
    },
    status: {
        type: String
    },
    bio: {
        type: String
    },
    favoriteWorkouts: {
        type: [String]
    },
    lifeQuote:{
        type: String
    },
    photos: {
        
    },
    // how to add array of friends?
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema); 