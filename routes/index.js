
const express=require('express');
 
const router = express.Router()

console.log("router started")
router.use('/patients',require('./patientRoute'));
router.use('/doctors',require('./doctorRoute'));
router.use('/reports',require('./reportsRoute'));

console.log("router ended")


 
module.exports = router ;
