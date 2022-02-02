//MONGO CONNECTION
const mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', (error) =>  {console.log(`There was an issue with the connection:  ${error}`)});
db.on('open', () => {console.log('Successfully connected to db')});


//EXPRESS APP
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => {console.log('App listening on some port')});

const usersRouter = require('./routers/usersRouter');

app.use('/users', usersRouter);



