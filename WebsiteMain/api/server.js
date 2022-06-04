
var express = require("express");
var cors = require("cors");
var mysql = require('mysql');
const app = express();
app.use(cors());


var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'portfoliodb'
})

db.connect(err => {
    if(err){
        throw err
    }
    console.log('Connected to MySQL')
})

app.get('/createdb', (req, res) => {
    let sql = `CREATE DATABASE portfoliodb`
    let query = db.query(sql, err => {
        if(err){
            throw err
        }
        res.send('Database Created')
    })
})

// Create Years Table
app.get('/createyears', (req, res) => {
    let sql = `CREATE TABLE years(id int AUTO_INCREMENT, year INT(15), content VARCHAR(255), PRIMARY KEY(id))`
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Created Table For Years')
    })
})

// Add Years To Table
app.get('/addyear', (req, res) => {
    let year = 2022
    let content = 'Not So Much Game Development, Working with REST APIs in Winforms, Building Semi-Complex Console Apps, and as of 6/4/2022 - Full-Stack Development'
    let post = {year: `${year}`, content: `${content}`}
    let sql = `INSERT INTO years SET ?`
    let query = db.query(sql, post, err => {
        if(err){
            throw err
        }
        res.send(`Added Year '${year}' To Table`)
    })
})

// Update Any Year
app.get('/updateyear/:id', (req, res) => {
    let year = 2019
    let content = 'Wrote my First Line of Code in C++ and Continued to Grow my Knowledge!'
    let sql = `UPDATE years SET year = ${year}, content = '${content}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err => {
        if(err){
            throw err
        }
        res.send(`Updated ${year} And Or ${year}'s Content`)
    })
})

app.get('/showyears', (req, res) => {
    let sql = `SELECT * FROM years`
    let query = db.query(sql, (err, results) =>{
        if(err){
            throw err
        }
        res.send(results)
    })
})

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
