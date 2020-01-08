const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const Todo = mongoose.model('Todo', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Todo({
    description: 'code out schema',
    completed: true
})

task.save().then(() => {
    console.log(task);
}).catch(error => {
    console.log(error);
})

// const me = new User({
//     name: 'Ian',
//     age: 27
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

