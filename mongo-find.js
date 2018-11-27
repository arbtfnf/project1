//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to mongoDb!')
    }
    console.log('Connected to MongoDb server!');

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch ', err);
    // });

    // db.collection('Todos').find({completed: 'false'}).toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs,undefined,2));
    //     }, (err) => {
    //         console.log('Unable to fetch ', err);
    //     });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bfbf77eb21f4bb8806d6fc2') 
    //     }).toArray().then((docs) => {
    //             console.log('Todos');
    //             console.log(JSON.stringify(docs,undefined,2));
    //         }, (err) => {
    //             console.log('Unable to fetch ', err);
    //         });
    
    db.collection('Todos').find({
        text: 'Apple'
    }).count().then((count) => {
                
                console.log(`Todos count:${count}`);
                //console.log(JSON.stringify(docs,undefined,2));
            }, (err) => {
                console.log('Unable to fetch ', err);
            });

    //db.close();
});

