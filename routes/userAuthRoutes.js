const express = require('express');
const router = express.Router();
const { userRegistration,userLogin } = require('../controllers/userAuth');

router.post('/register', userRegistration)
router.post('/login',userLogin)


module.exports = router;