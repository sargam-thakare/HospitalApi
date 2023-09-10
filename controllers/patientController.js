
const Patient=require('../model/patient')
 
const Report=require('../model/Report')

module.exports.register=async function register(req,res){

    console.log(" patient register");    
     const   phone = req.body.phoneno;
     const   name = req.body.name;

     console.log("doctor id ",req.doctor._id)
 
    const patient= await  Patient.find({  
        phoneno:phone
      })
      if(patient.length>0){
         
       // console.log("patient in find "+patient)
       return  res.send({
          "msg":"patient already exist",
          "patient":patient
        })
      };

   

      const patientnew=  await Patient.create({name:name,phoneno:phone,doctor:req.doctor._id})
      .then((patient)=>{
        if(patient){
      return  res.send({
        'msg':"patient created succefully",
         "patient": patient
      });
       
    }
   
      }).catch((err)=>{
        console.log("error ",err)
        res.send('error ',err);
        return
   })

     
  }
  
module.exports.createReport=  function createReport(req,res){    
      console.log("createReport for  ",req.params.id);

 
    Report.create({
      status:req.body.status,
      patient:req.params.id,
      doctor:req.doctor._id
    })
    .then((report)=>{
      console.log("report created");
      return res.send(200,{
        "msg":"report is created",
        "report":report
      })
    })

   }
  
module.exports.all_reports=function all_reports(req,res){   
       
      console.log("all_reports");
      Report.find({
        patient:req.params.id,
      }).sort("-date").then((patient)=>{

        if(patient){
          res.send(200,{
            "msg":"success",
            patients:patient
          })
        }
        else
        res.send(200,{
          "msg":"no report ",
          
        })
      })
   }
 