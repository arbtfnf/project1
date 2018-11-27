const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {students} = require('./../models/students');

beforeEach((done) => {
    Todo.remove({}).then(() => done()); //Clears DB after every request
});

describe('POST /todos', () => {
    it('It should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text + '1`');
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);   //Checks dublicates
                    done();
                }).catch((e) => done(e));
            });
    });
});

// describe('POST /students', () => {
//     it('It should create a new todo', (done) => {
//          var fName = 'Test student name';
// 	        var email= "anrgbndhu@gmail.com";
//          var pnumber= "123";

//             request(app)
//             .post('/students')
//             .send({fName})
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.fName).toBe(fName);
//             })
//             .end((err, res) => {
//                 if(err){
//                     return done(err);
//                 }

//                 students.find().then((students) => {
//                     expect(students.length).toBe(1);
//                     expect(students[0].fName).toBe(fName);
//                     done();
//                 }).catch((e) => done(e));
//             });

//     });
// });