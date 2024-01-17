const Student = require('../models/student.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateverificationToken, sendVerificationEmail } = require('../utils/email');


const registerStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existing_email = await Student.findOne({ email });
        if (existing_email) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const verficationToken = generateverificationToken(email.toLowerCase());

        const student = await Student.create({ name, email, password: passwordHash, verficationToken });

        // await sendVerificationEmail(email, verficationToken, name);


        res.status(201).json({ student, message: `Congratulations ${name}! You have successfully registered as a student` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Unable to register student' });
    }
}

const loginStudent = async (req, res) => {


    const {email, password} = req.body;
    const doesStudentExists = await Student.findOne({email: email});

    if(!doesStudentExists){
        return res.status(400).json({error: 'User does not exist with this email'});
    }
    if(!doesStudentExists.isVerified){
        return res.status(400).json({error: 'Please verify your email to login'});
    }
    const isPasswordCorrect = await bcrypt.compare(password, doesStudentExists.password);

    if(!isPasswordCorrect){
        return res.status(400).json({error: 'Password is incorrect'});
    }

    const token = jwt.sign({email: doesStudentExists.email, id: doesStudentExists._id}, process.env.JWT_SECRET, {expiresIn: '1d'});

    res.status(200).json({message: 'Logged in successfully', token, user: doesStudentExists});


}


const editStudent = async (req, res) => {

    const { studentId } = req.params;

    const {
        name,
        age,
        skills,
        bio,
        interests,
        } = req.body;

    try {

        const existing_Student = await Student.findById(studentId);
        if (!existing_Student) {
            return res.status(400).json({ error: 'Student does not exist' });
        }

        existing_Student.name = name ? name : existing_Student.name;
        existing_Student.age = age ? age : existing_Student.age;
        existing_Student.skills = skills ? skills : existing_Student.skills;
        existing_Student.bio = bio ? bio : existing_Student.bio;
        existing_Student.interests = interests ? interests : existing_Student.interests;
        existing_Student.student_limit = student_limit ? student_limit : existing_Student.student_limit;

        if (req.file) {

            if(existing_Student.profile_pic){
                const logoKey = existing_Student.profile_pic.split('/').pop();
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
            existing_Student.profile_pic = data.Location;

        } 

        await existing_Student.save();

        

        res.status(200).json({ message: 'Profile Details Updated Successfully', Student: existing_Student });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Unable to edit Student' });
    }

}

const editSkillsAndInterest = async (req,res) => {

    try{

        const { skills, interests } = req.body;

        const existing_Student = await Student.findById(req.user.id);
        if (!existing_Student) {
            return res.status(400).json({ error: 'Student does not exist' });
        }

        existing_Student.skills = skills ? skills : existing_Student.skills;
        existing_Student.interests = interests ? interests : existing_Student.interests;

        await existing_Student.save();

        res.status(200).json({ message: 'Skills and Interests Updated Successfully', Student: existing_Student });
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Unable to edit Student' });
    }
}


module.exports = { registerStudent, loginStudent, editStudent, editSkillsAndInterest };