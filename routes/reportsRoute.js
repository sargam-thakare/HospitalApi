
const express=require('express');
const app=express();
const reporstController=require('../controllers/reportsController')
const router = express.Router()
const passport=require('passport')


console.log("router doctorController")

 
 router.post('/:status',reporstController.getAllReports)
 

 module.exports = router ;
