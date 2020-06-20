const express = require('express');
const router = express.Router();

// @route GET api/auth

router.get('/', (req, res) => res.send('User auth route'));

module.exports = router;
