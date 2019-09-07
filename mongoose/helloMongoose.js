const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {useNewUrlParser: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


mongoose.connection.once("open",function(){
	console.log("数据库连接成功~~~");
});

mongoose.connection.once("close",function(){
	console.log("数据库连接已经断开~~~");
});

mongoose.disconnect();
