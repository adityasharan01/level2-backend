const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get user's color theme preference
router.get('/theme/:email', (req, res) => {
    const { email } = req.params;
    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.json({ theme: user.theme });
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        })
        .catch(error => {
            return res.status(500).json({ message: 'Internal server error' });
        });
});

// Save user's color theme preference
router.post('/theme', (req, res) => {
    console.log(req.body);
    User.findOneAndUpdate(
        { email: req.body.email },{ theme: req.body.theme },
        { upsert: true, new:true }
    )
        .then((data) => {

            return res.status(200).json({
                status: true,
                message: data,
            });
        })
        .catch(error => {
            return res.status(500).json({ status: false, message: error.message });
        });
});

module.exports = router;
