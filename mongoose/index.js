require("./util/dbConnection")
var student = require("./models/studentModel")

student.find({},function(err,docs){
  if(!err){
    console.log(docs)
  }
})