const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const {query} = require("express");
const DataQuery = require("./data-query.js");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'voters'
});

const data = new DataQuery(db);

const initVotersTables = () => {
    const sql = (
        `CREATE TABLE IF NOT EXISTS voters (
            voters_id int not null AUTO_INCREMENT,
            name varchar(255) not null,
            course varchar(255) not null,
            year varchar(255) not null,
            email varchar(255) not null,
            password varchar(255) not null,
            program varchar(255) not null,
            PRIMARY KEY (voters_id)
         ) AUTO_INCREMENT=1000`
    )

    db.query(sql, (error) => {
       if(error) throw new Error(error);
    });
}

// Create voters table if not exist
initVotersTables();

app.post('/register', (req, res) => {

   const { name, course, year, email, password, program } = req.body;
   const values = [name, course, year, email, password, program];

   data.findOneByField("voters", "email", email, (result) => {
       // Check if email already exist
       if(result) {
           return res.json("Email already exist!");
       }

       data.insertData(['name', 'course', 'year', 'email', 'password', 'program'], values, (result) => {
           return res.json(result);
       })
   })
});

app.post('/login', (req, res) => {

    const {email, password} = req.body;

    data.findOneByFields("voters", ["email", "password"], [email, password], (result) => {
        return res.json({data: result ? result : false});
    })

});

app.listen(8081, () => console.log("Server has been enabled"))