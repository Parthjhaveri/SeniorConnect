var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var Sequelize = require('sequelize')



const sequelizeConnection = require('./db');
const User = require('./models/user.js')


//sequelize.sync({ force: true});

var app = express()

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('./bundle'));

app.use('/', require('./routes'))


// app.listen(3000);
app.listen(process.env.PORT || '3000', () => console.log('Listening on port 3000'));
