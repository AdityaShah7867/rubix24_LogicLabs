const Mentor = require('../models/mentor.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
})

const s3 = new AWS.S3();


const deleteObjectFromBucket = async (objectKey) => {
    try {
        const originalKey = decodeURIComponent(objectKey);

        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: originalKey,
        };

        console.log(objectKey)

        await s3.deleteObject(params).promise();
        console.log(`Object with key '${originalKey}' deleted successfully.`);


    } catch (error) {
        console.error('Error deleting object:', error);
        throw error;
    }
};

const registerMentor = async (req, res) => {
    try {

        const { name, email, password, age, phone } = req.body;

        const existing_email = await Mentor.findOne({ email });

        if (existing_email) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt();

        const passwordHash = await bcrypt.hash(password, salt);
        const mentor = await Mentor.create({ name, email, password: passwordHash, age, phone });

        res.status(201).json({ mentor, message: `Congratulations ${name}! You have successfully registered as a Mentor` });
    } catch (error) {
        res.status(500).json({ error: 'Unable to register Mentor' });
    }
}

const loginMentor = async (req, res) => {


    const { email, password } = req.body;
    const doesMentorExists = await Mentor.findById({ email: email });

    if (!doesMentorExists) {
        return res.status(400).json({ error: 'User does not exist with this email' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, doesMentorExists.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ error: 'Password is incorrect' });
    }

    const token = jwt.sign({ email: doesMentorExists.email, id: doesMentorExists._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({ message: 'Logged in successfully', token, user: doesMentorExists });


}

const editMentor = async (req, res) => {
    const {
        name,
        age,
        skills,
        bio,
        interests,
        student_limit } = req.body;

    try {

        const existing_mentor = await Mentor.findById(req.user.id);
        if (!existing_mentor) {
            return res.status(400).json({ error: 'Mentor does not exist' });
        }

        existing_mentor.name = name ? name : existing_mentor.name;
        existing_mentor.age = age ? age : existing_mentor.age;
        existing_mentor.skills = skills ? skills : existing_mentor.skills;
        existing_mentor.bio = bio ? bio : existing_mentor.bio;
        existing_mentor.interests = interests ? interests : existing_mentor.interests;
        existing_mentor.student_limit = student_limit ? student_limit : existing_mentor.student_limit;

        if (req.file) {

            if(existing_mentor.profile_pic){
                const logoKey = existing_mentor.profile_pic.split('/').pop();
                await deleteObjectFromBucket(logoKey);
            }

            const fileKey = `${uuidv4()}-${req.file.originalname}`;
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: fileKey,
                Body: fs.createReadStream(req.file.path),
                ContentType: req.file.mimetype
            };
            const data = await s3.upload(params).promise();
            existing_mentor.profile_pic = data.Location;

        } 

        await existing_mentor.save();

        

        res.status(200).json({ message: 'Profile Details Updated Successfully', mentor: existing_mentor });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Unable to edit mentor' });
    }

}


const editSkillsAndInterest = async (req,res) => {

    try{

        const { skills, interests } = req.body;

        const existing_mentor = await Mentor.findById(req.user.id);


        if (!existing_mentor) {
            return res.status(400).json({ error: 'Mentor does not exist' });
        }

        existing_mentor.skills = skills ? skills : existing_mentor.skills;
        existing_mentor.interests = interests ? interests : existing_mentor.interests;

        await existing_mentor.save();

        res.status(200).json({ message: 'Skills and Interests Updated Successfully', mentor: existing_mentor });
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Unable to edit Student' });
    }
}

module.exports = { registerMentor, loginMentor, editMentor, editSkillsAndInterest };