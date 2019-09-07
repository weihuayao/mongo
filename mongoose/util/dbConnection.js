const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {
  useNewUrlParser: true
});

mongoose.connection.once("open", function () {
  console.log("数据库已连接");
})
