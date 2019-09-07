const mongoose = require('mongoose');

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

module.exports = StuModel;