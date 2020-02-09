const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next() // funciton wont stop unless next is called
})

const User = mongoose.model('User', userSchema);

module.exports = User;