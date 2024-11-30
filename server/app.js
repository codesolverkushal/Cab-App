const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require('./db/db');
const userRoutes = require('./routes/user.route');

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/users',userRoutes);

module.exports = app;