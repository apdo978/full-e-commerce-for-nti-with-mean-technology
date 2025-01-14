const express = require('express')
const routes = express.Router()
const { insertUser, getAllUsers, DeleteUsers, EditUsers, loginUser, verify }=require('../Controllers/usercontroller')
const userValidatore = require('../validators/uservalidator')
const asyncHandler = require('express-async-handler');

// Crud USER
//1-Create User
//{message:"pls insert aname"}
routes.post("/login", userValidatore.loginUser, loginUser)

routes.post("/InsertUserS",userValidatore.insertUserValidator, insertUser)

//2-get all  Users
routes.get("/GetAllUserS",verify,getAllUsers )

routes.delete("/DeleteUsers", verify,userValidatore.DeleteUserValidator,DeleteUsers)

routes.patch("/EditUsers", verify,userValidatore.editUserValidator, EditUsers)

module.exports = routes