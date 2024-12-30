const express = require('express');
const { createClass } = require('../controllers/classes');
const router = express.Router();;

router.post("/create",createClass)

module.exports = router;