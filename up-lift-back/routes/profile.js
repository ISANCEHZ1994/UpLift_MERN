const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Post = require('../models/Post');
const Profile = require('../models/Profile');

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate("user", ['name']);

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user!' })
        };

        res.json(profile);
    } catch (err){
        console.log(err.message);
        res.status(500).send('Server Error');
    };
});

router.post('/', [ auth, [

]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    };

    const {
        website,
        location,
        occupation,
        status,
        bio,
        favoriteWorkouts,
        lifeQuote        
    } = req.body;

    // create a profile object that will be inserted to the database!
    const profileFields = {};
    profileFields.user = req.user.id;
    

})

module.exports = router;