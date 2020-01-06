const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'todo-manager';

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

    db.collection('task').insertMany([
        {
            description: 'walk dog',
            completed: false
        },
        {
            description: 'get boba',
            completed: true
        },
        {
            description: 'do math',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents');
        }
        console.log(result.ops);
    });
})