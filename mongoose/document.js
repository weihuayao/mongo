const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {
  useNewUrlParser: true
});

//建立连接
mongoose.connection.once("open", function () {
  console.log("数据库已连接");
})


var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name: String,
  age: String,
  gender: {
    type: String,
    default: "男"
  },
});

var StuModel = mongoose.model('students', stuSchema)
//创建一个document对象
var student = new  StuModel({
  name: "james",
  age:"32",
})

student.save(function(err) {
  if (!err){
    console.log("插入成功");
  }
})