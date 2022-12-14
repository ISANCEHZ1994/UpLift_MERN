const express = require('express');
const router = express.Router();

const Profile = require('../models/Profile');
const User    = require('../models/User');

router.get('/me', async (req, res) => {
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

module.exports = router;