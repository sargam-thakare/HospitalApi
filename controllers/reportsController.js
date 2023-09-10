

const Report=require('../model/Report') 



module.exports.getAllReports=function getAllReports(req,res){
    console.log("getAllReports");

    Report.find({status:req.params.status})
    .then((reports)=>{
        if(reports){
            res.send(200,{
                "msg":"succes",
                "reposrts":reports
            })
        }
        else
        {
            res.send(200,{
                "msg":"succes",
                "reposrts":"no reports found "
            })
        }
    })
}