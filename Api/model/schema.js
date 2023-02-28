const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:'string',
        require:true
    },
    email:{
        type:'string',
        require:true,
        unique:true
    },
    password:{
        type:'string',
        require:true
    },
    image:{
        type:'string'
    }

})
const personModel= new mongoose.model("user",userSchema);
module.exports=personModel