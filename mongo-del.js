const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to mongoDb!')
    }
    console.log('Connected to MongoDb server!');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Mango'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Apple'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result) => {
        console.log(result);
    });

});