var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: [true, 'Why no bacon?'],
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        required: false
    }
});

// var newTodo1 = new Todo({
//     text: 12,
//     completedAt: 123 
// });

// newTodo1.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo');
// });

// var newTodo2 = new Todo({
//     text: 'gym',
//     //completed: 'true',
//     completedAt: 123 
// });

// newTodo2.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save Todo');
// });

module.exports = {Todo};