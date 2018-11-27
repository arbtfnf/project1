//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to mongoDb!')
    }
    console.log('Connected to MongoDb server!');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: 'false'

    // }
    //     ,(err,result) => {
    //         if(err){
    //             return console.log('Unable to connect to mongoDb!', err);
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     });

    // db.collection('Details').insertOne({
    //     name: 'Anurag R B',
    //     age: '24',
    //     location: 'Mysore'

    // }
    //     ,(err,result) => {
    //         if(err){
    //             return console.log('Unable to connect to mongoDb!', err);
    //         }
    //         //console.log(JSON.stringify(result.ops,undefined,2));
    //         console.log(result.ops[0]._id.getTimestamp());
    //     });

    db.close();
});

