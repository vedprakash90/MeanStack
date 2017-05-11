var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
var mongoose=require('mongoose');
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mittens');
var Meow = mongoose.model('Meow', {
 text: String
  });
app.get('/meows',function(req,res,next)
	{
Meow.find({},function(err,meows)
{
return res.json(meows);
})
	});

app.post('/meows', function(req, res, next){	
		var newMeow = new Meow({
			text: req.body.newMeow		
		});
		newMeow.save(function(err){
			return res.send("Added Successfully");
	});	
	});

app.put('/meows/remove', function(req, res, next){	
var meowId=req.body.meow._id;		
		Meow.remove({_id: meowId}, function(err){
			return res.send("Deleted Successfully");
	});
});




app.use(express.static('public'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

