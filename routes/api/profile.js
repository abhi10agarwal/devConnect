const express = require('express');
const router = express.Router();

// @route GET api/profile

router.get('/', (req, res) => res.send('User profile route'));

module.exports = router;
