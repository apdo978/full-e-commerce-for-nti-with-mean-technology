const express = require('express')
const routes = express.Router()
const { insertUser, getAllUsers, EditUsers, loginUser, verify }=require('../Controllers/usercontroller')
const userValidatore = require('../validators/uservalidator')
const asyncHandler = require('express-async-handler');

// Crud USER
//1-Create User
//{message:"pls insert aname"}
routes.post("/login", userValidatore.loginUser, loginUser)

routes.post("/InsertUserS",userValidatore.insertUserValidator, insertUser)

//2-get all  Users
routes.get("/GetAllUserS",verify,getAllUsers )

// routes.delete("/DeleteUsers", verify,userValidatore.DeleteUserValidator,DeleteUsers)
  //  in the next commit i will make a new model for user contains a flag(avilable : true or false) delete will detect if usuers has active order
//or not and can cancel users order and retrive db products balance 

routes.patch("/EditUsers", verify,userValidatore.editUserValidator, EditUsers)

module.exports = routes