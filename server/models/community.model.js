const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({

    name: {

        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },

    description: {


        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"]
    },

    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],

    latest_message: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },

    members: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: ['Student', 'Mentor']
    }],

    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    },



}, { timestamps: true });

module.exports = mongoose.model('Community', CommunitySchema);


