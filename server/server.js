const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv =require('dotenv');


dotenv.config();
const app = express();

mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>{ 
        if(err){
            console.log(err);
        } else {
            console.log('Connected to database.');
        }
});

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//require APIs
const productRoutes = require('./routes/product');
app.use('/api', productRoutes) ;

app.listen(3000, err => {
    if(err){
        console.log(err);
    } else {
        console.log('Listen on PORT', 3000);
    }
});