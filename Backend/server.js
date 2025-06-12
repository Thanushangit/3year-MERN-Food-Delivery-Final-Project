require("dotenv").config()
const express=require('express');
const mongoose=require('mongoose');
const breakfast=require('./Routes/breakfastroutes')
const lunch=require('./Routes/lunchroutes')
const dinner=require('./Routes/dinnerroutes')
const popular=require('./Routes/popularroutes')
const Order=require('./Routes/customerOrder')
const cors=require("cors")

const app=express();
app.use(express.json());
app.use(cors());
app.use('/api',breakfast);
app.use('/api',lunch);
app.use('/api',dinner);
app.use('/api',popular);
app.use('/order',Order);

app.listen(process.env.PORT,()=>{
    console.log(`server is listing in the port ${process.env.PORT}`);
});

mongoose.connect('mongodb://localhost:27017/Platezy').then(()=>{
    console.log("database is successfuuly connected");
}).catch((err)=>{
console.log("database is not connected",err.message);
})

