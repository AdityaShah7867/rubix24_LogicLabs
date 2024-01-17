const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({

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

    start_date: {

        type: Date,
        required: [true, "Start date is required"]
    },

    end_date: {

        type: Date,
        required: [true, "End date is required"]
    },

    scheduled_time: {

        type: String,
        required: [true, "Scheduled time is required"]
    },


    mentor_id: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    },

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],

    is_paid: {
        type: Boolean,
        default: false
    },

    location: {
        type: String,
    
    },

    is_active: {
        type: Boolean,
        default: true
    },

    video_call_link:{
        type: String,

    },

    type:{
        type: String,
        enum: ["online", "offline", "event"],
        required: [true, "Type is required"],
        default: "online"

    }

}, { timestamps: true });

module.exports = mongoose.model("Program", ProgramSchema);