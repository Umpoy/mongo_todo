const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'todo-manager';

const id = new ObjectID();
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'admin',
    //     age: '27'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Hal',
    //         age: 24
    //     },
    //     {
    //         name: 'Jordan',
    //         age: 35
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('task').insertMany([
    //     {
    //         description: 'walk dog',
    //         completed: false
    //     },
    //     {
    //         description: 'get boba',
    //         completed: true
    //     },
    //     {
    //         description: 'do math',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('task').findOne({ _id: new ObjectID("5e127fb47b97f106e2e24b32") }, (error, task) => {
    //     console.log(task);
    // });

    // db.collection('task').find({ completed: true }).toArray((error, task) => {
    //     console.log(task);
    // })

    db.collection('task').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})