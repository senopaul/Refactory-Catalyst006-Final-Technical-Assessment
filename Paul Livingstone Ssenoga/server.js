const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
require('dotenv/config');
const path =require('path')

//Importing Routes
const patientRoute = require('./routes/patientroute');
const { Router } = require("express");



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Setting Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));




app.use('/', patientRoute);




//Mongo DB connection
mongoose.connect(process.env.DATABASE,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  () => console.log('DB connected')





app.listen(3000, () => console.log("Serevr runing at port 3000"));
