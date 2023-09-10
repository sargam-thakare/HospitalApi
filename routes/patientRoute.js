
const express=require('express');
const app=express();
const patientController=require('../controllers/patientController')
const router = express.Router()
const passport=require('passport')
const jwt = require('jsonwebtoken');
const Doctor = require('../model/doctor');


console.log("router patientController")

 
async function   verifyToken(req, res, next) { 

 
    console.log("Bearer Token"+req.headers['authorization']);
  let token;
  
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
       token = req.headers.authorization.split(" ")[1];
      console.log("TOKEN : "+token);
      req.token = token;
    }
    
    if (!token) { // ****** If Token not found ****** //
      console.log("Token Error");
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
  
    // ****** Try Block ****** //
    try {

      const decoded =   jwt.verify(token,'codeial'); // ****** Decode Token ****** //
      console.log("DECODED TOKEN : "+decoded);
      console.log("DECODED TOKEN : "+decoded.id);

      await  Doctor.findById(decoded.id)
       .then((doctor)=>{
        req.doctor=doctor
        console.log("  req.doctor "+ req.doctor)

      }) // ****** Find Doctor by ID ****** //
      console.log("Doctor.findById(decoded.id) "+ Doctor.findById(decoded.id))

      next();


    } catch (err) {  // ****** Catch Block - Error Handling ****** //
      console.log(err);
      return res.status(401).json({
        success: false,
        message: "Unauthroized access"
      });
    }
 
};

 router.post('/register',verifyToken,patientController.register)
 router.post('/createReport/:id',verifyToken,patientController.createReport)
 router.post('/all-reports/:id',verifyToken,patientController.all_reports)

 module.exports = router ;