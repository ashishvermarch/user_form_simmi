const express = require('express');
const router = express.Router();
const Form  = require('../models/Form');

router.post('/', async (req, res)=> {
     const form = Form(req.body);
     const savedform = await form.save();
        res.json(savedform);
})
module.exports = router;