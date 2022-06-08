const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phn_no: {
        type: Number,
        required: true,
        unique: true
    },
    dob: {
        type: String,
          required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: true,
        unique: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pin_code: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('form', FormSchema)