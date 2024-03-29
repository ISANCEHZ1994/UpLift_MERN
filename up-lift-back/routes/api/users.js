const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); // https://express-validator.github.io/docs/check-api.html

const User = require('../../models/User');

router.post(
    '/', [
    check('name', 'NOTE: Name is required!').not().isEmpty(),
    check('email', 'NOTE: Please include a valid email').isEmail(),
    check('password', 'NOTE: Please enter a password with 6 characters or more').isLength({ min: 6 })
], async ( req, res ) => {

    const errors = validationResult(req);

    if( !errors.isEmpty() ){
        return res.status(400).json({ errors: errors.array() });
    };

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email});
        if ( user ) {
            return res.status(400).json({ 
                errors: [{ msg: 'That user already EXISTS!' }] 
            });
        };
        user = new User({
            name,
            email,
            password
        }); 
        
        await user.save();

        res.send('User Registered!').send(body)

    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!')
    };
});

module.exports = router;