const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({

    name: {

        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },

    age: {

        type: Number,
        required: [true, "Age is required"],
        min: [18, "Must be at least 18 years old"]
    },

    mentor_programs_conducted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MentorProgram'
    }],

    email: {

        type: String,
        required: [true, "Email is required"],
        minlength: [5, "Email must be at least 5 characters long"]
    },

    password: {

        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"]
    },

    interests: [String],

    skills: [String],

    bio: String,

    profile_pic: String,

    communities_created: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community'
    }],

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],

    events_created: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],

    student_limit:{
        type: Number,
    },

    pricing: {

        model: {
            type: String,
            enum: ['hourly', 'package', 'subscription'],
            default: 'hourly',
        },

        rate: {
            type: Number,
            required: function () {
                return this.pricing.model === 'hourly';
            },
        },

        packageDetails: {
            type: String,
            required: function () {
                return this.pricing.model === 'package';
            },
        },
        
        subscriptionDetails: {
            type: String,
            required: function () {
                return this.pricing.model === 'subscription';
            },
        },
    },

    verficationToken: String,

    isVerified: {

        type: Boolean,
        default: false
    },


}, { timestamps: true });

module.exports = mongoose.model('Mentor', MentorSchema);