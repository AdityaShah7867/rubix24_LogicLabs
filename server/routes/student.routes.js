const router = require('express').Router();

const { registerStudent, loginStudent, editStudent } = require('../controllers/student.controller');
const {validateToken} = require('../middlewares/validateJWTToken.middleware')
router.post('/register', registerStudent);
router.post('/login', loginStudent);
router.patch('/', validateToken, editStudent);

module.exports = router;