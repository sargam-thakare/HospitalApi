
const express=require('express');
const app=express();
const doctorController=require('../controllers/doctorController')
const router = express.Router()
const passport=require('passport')


console.log("router doctorController")

 
 router.post('/register',doctorController.register)
 router.post('/login',doctorController.login)


 module.exports = router ;
