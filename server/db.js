const mysql = require('mysql');
require('dotenv').config();


const Mysql = mysql.createConnection({
    host: process.env.DB_HOST ,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

// connection With .env
// host:process.env.DB_HOST ,
//     user:process.env.DB_USERNAME,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_DATABASE

Mysql.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log("Connected to Mysql;")    
    } 
});

module.exports = Mysql;