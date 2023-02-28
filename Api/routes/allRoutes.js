const { Router } = require("express");

const express=require('express');
const userController=require('./../controller/controller')

const router=express.Router();
router.post('/login',userController.login)
router.post('/signup',userController.signup)

module.exports=router;