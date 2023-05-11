const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

router.get('/', auth, (req, res) => res.send("AUTH ROUTE"));

router.get('/', auth, async( req, res ) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch( err ) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', 
[
    check('email', "NOTE: Please include a vaild email!").isEmail(),
    check('password', "NOTE: Password is requried!").exists()
], async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    };

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({ errors: [{ mgs: "INVALID CREDENTIALS"  }] });
        };

        const isMatch = await bcrypt.compare( password, user.password );
        
        if(!isMatch){
            return res.status(400).json({ errors: [{ mgs: "INVALID CREDENTIALS" }] });
        };
        
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err , token) => {
                if(err) throw err;
                res.json({ token });
            }
        );
    } catch( err ) {
        console.error(err);
        res.status(500).send("SERVER ERROR - perhaps you done goofed?")
    };
});

module.exports = router;