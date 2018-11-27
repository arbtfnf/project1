var express  = require('express');
var bodyParser  = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose'); 
var {Todo} = require('./models/todo');
var {students} = require('./models/students'); 
//var {counselling} = require('./models/counselling');
//var {home} = require('./models/home');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/students', (req,res) => {
    //console.log(req.body);
    var newStudent1 = new students({
        fName: req.body.fName,
        email: req.body.email,
        pnumber: req.body.pnumber
    });

    newStudent1.save().then((doc) => {
        //console.log('Saved details', doc);
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/students', (req,res) => {
        students.find().then((students) => {
            res.send({students});
        }, (e) => {
            res.status(400).send(e);
        });
});

app.get('/students/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    students.findById(id).then((student) => {
        if(!student){
            return res.status(404).send();
        }

        res.send({student});

    }).catch((e) => {
        res.status(404).send();
    });

});

app.post('/todos', (req,res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
                //console.log('Saved details', doc);
                res.send(doc);
            }, (e) => {
                res.status(400).send(e);
            });
});

app.get('/todos', (req,res) => {
        Todo.find().then((todos) => {
            res.send({todos});
        }, (e) => {
            res.status(400).send(e);
        });
});

app.listen(port, () => {
    console.log(`Started up at ${port}`);
});

module.exports = {app};
