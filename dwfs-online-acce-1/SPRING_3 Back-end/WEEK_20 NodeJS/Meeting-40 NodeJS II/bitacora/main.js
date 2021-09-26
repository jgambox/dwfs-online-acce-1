// var moment = require('moment');
// var unique = require('uniq');
//
// var myDate = new Date();
// myCoolDate = moment((myDate)).format('LL');
// console.log(myDate);
//
// var myList = [1, 2, 2, 1, 3, 4, 5, 5, 6, 7, 8];
// var myUniqueList = unique(myList);
// console.log(myUniqueList);

// import express from "express";
express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})