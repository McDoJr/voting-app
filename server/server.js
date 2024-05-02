const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const {query} = require("express");
const DataTable = require("./data-query.js");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'voters'
});

const initVotersTables = () => {
    const sql = (
        `CREATE TABLE IF NOT EXISTS voters (
            voters_id int not null AUTO_INCREMENT,
            firstname varchar(255) not null,
            lastname varchar(255) not null,
            course varchar(255) not null,
            year varchar(255) not null,
            email varchar(255) not null,
            password varchar(255) not null,
            department varchar(255) not null,
            PRIMARY KEY (voters_id)
         ) AUTO_INCREMENT=1000`
    )

    db.query(sql, (error) => {
       if(error) throw new Error(error);
    });

    console.log("Connected to database!")
}

// Create voters table if not exist
initVotersTables();

app.post('/register', (req, res) => {

   const { firstname, lastname, course, year, email, password, department } = req.body;
   const values = [firstname, lastname, course, year, email, password, department];
   let table = new DataTable(db, "voters");
   table.findOne({email}, (result) => {
       // Check if email already exist
       if(result) {
           return res.json("Email already exist!");
       }
       table.insert({firstname, lastname, course, year, email, password, department}, (result) => {
           return res.json(result);
       })
   })
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    let table = new DataTable(db, "voters");
    table.findOne({email, password}, (result) => {
        return res.json({data: result ? result : false});
    })
});

app.listen(8081, () => console.log("Server has been enabled"))