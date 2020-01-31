const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        valdate(vale) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid/taken')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length < 7 || value.includes('password')) {
                throw new Error('Password not acceptable')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Please Enter a positive number');
            }
        }
    }
});

module.exports = User;