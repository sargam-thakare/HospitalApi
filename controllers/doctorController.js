 

const Doctor=require('../model/doctor') 
const jwt = require('jsonwebtoken');

module.exports.register=function register(req,res){
   console.log("register");

   let name=req.body.username;
   let password=req.body.password;

   console.log("name "+name +" pass "+password)
   Doctor.create({username:name,password:password})
   .then((user)=>{
    console.log("doctor "+user)
    res.send('doctor registered');

   }).catch((err)=>{console.log("error ",err)
   res.send('error ',err);
})

  }

  module.exports.login=function login(req,res){
       console.log("login user ",req.body.username+"  pass "+req.body.password);
        Doctor.find({username:req.body.username}).
      then((doctor)=>{
        
       
        let newd=doctor[0];
   


        if(doctor.length>0){
           // req.doctor=doctor
        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign({id:newd._id}, 'codeial' , {expiresIn:  "120m"})
            }
        })
      }
      else
      {
        return res.json(404, {
            message: 'invalid credentials',
             
        })
      }
    });
       
       // res.send("login success") 
    //    console.log("doctor ",doctor)
    //    if(doctor){
    //    console.log("doctor logged in ",doctor._id)
    //     return res.json(200, {
    //         message: 'Sign in successful, here is your token, please keep it safe!',
    //         data:  {
    //             token: jwt.sign({id:doctor._id}, 'codeial' , {expiresIn:  "120m"})
    //         }
    //     })
    //        }

        //    console.log("not found ",doctor)

        //    return res.json((404),{
        //     "message":"user not found"
        //    })

    
      
      
  }