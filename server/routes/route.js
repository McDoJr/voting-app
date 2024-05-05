const router = require('express').Router();

const { verification } = require('../controller/controller.js');

router.post('/user/otp', verification);

module.exports = router;