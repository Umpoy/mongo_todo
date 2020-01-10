const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/todo-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

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


// const me = new User({
//     name: 'Clark',
//     email: 'superman@gmail.com',
//     password: 'mytestpassw0rd',
//     age: 35
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

const Todo = mongoose.model('Todo', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task1 = new Todo({
    description: 'pack for trip  ',
    completed: true
});

const task2 = new Todo({
    description: 'go to bank',
})

task1.save().then(() => {
    console.log(task);
}).catch(error => {
    console.log(error);
});

task2.save().then(() => {
    console.log(task);
}).catch(error => {
    console.log(error);
});