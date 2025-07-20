const express = require('express');
const router = express.Router();
const addNewUserController = require('../controllers/addNewUserController');
const registerUser = require('../controllers/addNewUserController');

router.post('/register', addNewUserController, (req, res) => {
    
    res.send("added your account .login!")
})

router.get('/', (req, res) => {
    res.render('register');

})

module.exports = router;
