const {ObjectID} = require('mongodb');


const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');

const {students} = require('./server/models/students');

var id = '5bfcef8dd63f3e3ca3e1cae5';

if(!ObjectID.isValid){
    console.log('Id not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// students.find({
//     _id: id
// }).then((students) => {
//     console.log('Students',students);       //ALL
// });

// students.findOne({
//     _id: id
// }).then((student) => {
//     console.log('Student',student); //Only one other than id(better)
// });

students.findById(id).then((student) => {       //Only one by id
    if(!student){
        return console.log('Id not found');     //When Id is not found
    }
    console.log('Student by its id',student);
}).catch((e) => console.log(e));