const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({

    name: {

        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },

    age: {

        type: Number,
    },


    email: {

        type: String,
        required: [true, "Email is required"],
        minlength: [5, "Email must be at least 5 characters long"]
    },

    password: {

        type: String,
        required: [true, "Password is required"],
    },

    mentor_programs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MentorProgram'
    }],

    interests: [String],

    skills: [String],

    bio: String,

    profile_pic: String,

    communities_joined: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'

    }],

    mentors: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'

    }],

    is_a_mentee: {

        type: Boolean,
        default: true
    },

    verficationToken: String,

    isVerified: {

        type: Boolean,
        default: false
    },

}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);

