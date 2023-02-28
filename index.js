const express =require('express');
const app=express();
app.use(express.json());
const router=require('./Api/routes/allRoutes')
const db=require('./Api/helper/dbcontroller');
db();
app.use('/api',router);
const port=4000
app.listen(4000,()=>{
    console.log('Hello Chaudhary');
})