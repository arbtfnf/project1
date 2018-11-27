var mongoose = require('mongoose');

var students = mongoose.model('students', {
    fName: {
        type: String,
        required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    lName: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    gender: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    fatherName: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    country: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    state: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    course: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    dob: {
        type: Number,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    address: {
        type: String,
        //required: [true, 'Why no name?'],
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    pnumber: {
        type: Number,
        required: true
    }
});

// var newStudent1 = new students({
//     fName: 'Anurag Bandhu',
//     email: 'anrgbndhu@gmail.com',
//     pnumber: 123 
// });

// newStudent1.save().then((doc) => {
//     console.log('Saved details', doc);
// }, (e) => {
//     console.log('Unable to save details');
// });

module.exports = {students};