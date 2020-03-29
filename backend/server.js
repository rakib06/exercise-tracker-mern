const express = require('express');
const cors = require('cors');
// db
const mongoose = require('mongoose');


require('dotenv').config();

// createing express server
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json()); // parse json
// for mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})


app.listen(port, ()=>{
    console.log('Server is running on port: ', port);
})