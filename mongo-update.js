const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to mongoDb!')
    }
    console.log('Connected to MongoDb server!');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bfc0096b21f4bb8806d722c')
    },{
        $set: {
            text: 'Mongo',
            completed: 'false'
            }
        }, {
            returnOrignal: false
    }).then((result) => {
        console.log(result);
    });
});
