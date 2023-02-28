const personModel =require('./../model/schema');
const jwt=require('jsonwebtoken');
const secretkey='Qasim';

//////////////////////// Signup Api/////////////////////////
exports.signup= async (req,res)=>{
    let {username,email,password}=req.body;
    const signup=new personModel({
        username,
        email,
        password,
        img:req.img
    });

    const result=await signup.save();
    res.status(200).json(result);
};

//////////////////////////Login Api/////////////////////////////
exports.login=async(req,res)=>{
    let {email,password}=req.body;
    const login=await personModel.findOne({ email:email });
    if(login==null){
        res.status(401).json({
            message:'user not signup',
        });
    } else if(login.email===email && login.password===password){
        jwt.sign({id:login.id},secretkey,(err,token)=>{
            if(token){
                res.status(200).json({
                    message:'successfully login',
                    token,
                });
            }
        });
    }
    else {
        res.status(401).json({
          message: "email and password not valid",
        });
      }

};