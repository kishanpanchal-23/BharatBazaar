const express = require('express');
const app = express();
const signupRouter = require('./routes/authRoutes');
const SuperAdminRouter = require('./routes/superAdmin');
const productRouter = require('./routes/productRoutes');
const cors = require('cors');
const dotenv = require('dotenv').config();



app.use(cors());
app.use(express.json());
app.use('/',signupRouter,SuperAdminRouter,productRouter);
app.use(express.static('../client'));
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Connected to server ${PORT}`)
})