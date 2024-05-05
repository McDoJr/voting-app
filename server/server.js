const express = require('express');
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const cors = require('cors');
const {query} = require("express");
const DataTable = require("./data-query.js");
const route = require('./routes/route.js');
const saltRounds = 10;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', route);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'voters'
});

const messages = {

}

const initVotersTables = () => {
    const sql = (
        `CREATE TABLE IF NOT EXISTS voters (
            student_id varchar(255) not null,
            firstname varchar(255) not null,
            lastname varchar(255) not null,
            course varchar(255) not null,
            year varchar(255) not null,
            email varchar(255) not null,
            password varchar(255) not null,
            department varchar(255) not null,
            PRIMARY KEY (student_id)
         )`
    )

    db.query(sql, (error) => {
       if(error) throw new Error(error);
    });
}

// Create voters table if not exist
initVotersTables();

const hashPassword = (password, callback) => {
    bcrypt.hash(password, saltRounds, (error, hash) => {
        if(error) throw error;
        return callback(hash);
    })
}

app.post('/signup', (req, res) => {
    initVotersTables();
    const { student_id, firstname, lastname, course, year, email, password, department } = req.body;
    const values = [student_id, firstname, lastname, course, year, email, password, department];
    let table = new DataTable(db, "voters");
    table.findOne({email}, result => {
        if(result) {
            return res.json({status: false, message: "GSuite was already registered"});
        }
        return res.json({status: true, message: "Proceed to verification"});
    })
})

app.post('/register', (req, res) => {
    initVotersTables();
    const { student_id, firstname, lastname, course, year, email, password, department } = req.body;
    const values = [student_id, firstname, lastname, course, year, email, password, department];
    let table = new DataTable(db, "voters");
    table.findOne({email}, (result) => {
        // Check if email already exist
        if(result) {
            return res.json({status: false, message: "GSuite was already registered"});
        }

        let datas = {student_id ,firstname, lastname, course, year, email, password, department};

        hashPassword(password, (hash) => {
            table.insert({...datas, password: hash}, (result) => {
                return res.json({status: true, message: "Registration success"});
            })
        })
    })
});

app.post('/login', (req, res) => {
    initVotersTables()
    const {email, password} = req.body;
    let table = new DataTable(db, "voters");
    table.findOne({email}, (result) => {
        if(!result) {
            return res.json({
                status: false,
                message: "GSuite not registered"
            });
        }
        bcrypt.compare(password, result.password, (error, data) => {
            if(error) throw error;
            let form = {
                status: false,
                message: "Invalid Password"
            }
            if(data) {
                form = {status: true, data: result, message: "Login successfully"};
            }
            return res.json(form);
        })
    })
});


app.listen(8081,() => console.log("Server has been enabled"))