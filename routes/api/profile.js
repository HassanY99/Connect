const express = require('express');
const router = express.Router();


// @route   Get api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
    res.send("Getting all profile")
});

module.exports = router;