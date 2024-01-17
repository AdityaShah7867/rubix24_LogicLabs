const Mentor = require('../models/mentor.model');


const calculateMatchingScore = (mentor, mentee) => {

    const commonSkills = mentor.skills.filter(skill => mentee.skills.includes(skill));

    const commonInterests = mentor.interests.filter(interest => mentee.interests.includes(interest));

    const skillWeight = 2;
    
    const interestWeight = 1;

    const score = (commonSkills.length * skillWeight) + (commonInterests.length * interestWeight);

    return score;
};


const findBestMatchForMentee = async (mentee) => {
    try {

        const mentors = await Mentor.find({});
        let bestMatch = null;
        let highestScore = -1;

        mentors.forEach((mentor) => {
            const score = calculateMatchingScore(mentor, mentee);

            if (score > highestScore) {
                highestScore = score;
                bestMatch = mentor;
            }
        });

        return bestMatch;
    } catch (error) {
        console.error('Error finding mentor match:', error.message);
        throw error;
    }
};

module.exports = {
    calculateMatchingScore,
    findBestMatchForMentee
}