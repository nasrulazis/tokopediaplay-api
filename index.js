require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database =mongoose.connection;

database.on('error',(error) =>{
    console.log(error);
});
database.once('connected',() =>{
    console.log('Database Connected');
});

const videoRoutes = require ('./app/routes/videoRoutes')
const productRoutes = require ('./app/routes/productRoutes')
const commentRoutes = require ('./app/routes/commentRoutes')
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }), 
);
app.use('/api/video',videoRoutes);
app.use('/api/product',productRoutes);
app.use('/api/comment',commentRoutes);

app.listen(3000,()=>{
    console.log(`Server Started at ${3000}`)
});