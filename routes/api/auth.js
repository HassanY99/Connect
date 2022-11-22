const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');


// @route   Get api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error!')
    }
    
});


// @route   Post api/users
// @desc    Authenticate User
// @access  Public
router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter your password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    
    try {
        // If user already exists
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
        }
        
        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched) {
            return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        // return JWT

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),
        {expiresIn: 3600}, 
        (error, token) => {
            if (error) throw error;
            res.json({ token });
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error.")
        
    }
})

module.exports = router;