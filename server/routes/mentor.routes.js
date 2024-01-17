const router = require('express').Router();

const { registerMentor, loginMentor, editMentor } = require('../controllers/mentor.controller');
const { validateToken } = require('../middlewares/validateJWTToken.middleware')

router.post('/register', registerMentor);
router.post('/login', loginMentor);
router.patch('/:mentorId', validateToken, editMentor);

module.exports = router;