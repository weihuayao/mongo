const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {
  useNewUrlParser: true
});

//建立连接
mongoose.connection.once("open", function () {
  console.log("数据库已连接");
})
//新建schema
var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name: String,
  age: String,
  gender: {
    type: String,
    default: "男"
  },
});

//新建model
var StuModel = mongoose.model('students', stuSchema)

//调用model的方法
