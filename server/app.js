require('dotenv').config()
console.log(process.env.JWT_SECRET)
const express = require("express")
const app = express()
const routes = require("./routes")
const cors = require('cors')
const jwt = require('jsonwebtoken');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/country-encyclopedia', {useNewUrlParser: true});


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.use("/", routes)

console.log('listening 3000..')
app.listen(3000)