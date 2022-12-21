const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
// const auth = require('');

const User = require('../../models/User');
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const { reset } = require('nodemon');

router.post('/', [
    
    [ check('text', 'Text is required').not().isEmpty() ]
], async ( req, res ) => {
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({ errors: errors.array() });
    };
    try {
        const user = await User.findById( req.user.id ).select('-password');
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            user: req.user.id
        });
        const post = await newPost.save();
        res.json(post);
    } catch ( err ) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get(
    '/:id',
    

)

module.exports = router;