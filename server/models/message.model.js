const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

    content: {

        type: String,
        required: [true, "Message is required"],
        minlength: [2, "Message must be at least 2 characters long"]
    },

    sender: {

        type: mongoose.Schema.Types.ObjectId,
        ref: ['Student', 'Mentor']
    },

    community_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    },

}, { timestamps: true });