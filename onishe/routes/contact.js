var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("contact");
});
var nodemailer = require('nodemailer');
router.post('/send', function (req, res) {
	var transporter = nodemailer.createTransport({
		service:'Gmail',
		auth :{
			user :'tsijim17@gmail.com',
			pass:'bootstrap',
			
		}
	})
  var mailOptions ={
	  from:'Okweye Chioma <okweyechioma@outlook.com>',
	  to:'tsijim17@gmail.com',
	  subject:'Website Submission',
	  text:'You have a new submission with the following details...Name:' +req.body.name + 'email:' + req.body.email +'Message:'+req.body.message,
	  html:'<p>Here is  Feedback from customer..</p><ul><li>First Name : ' + req.body.firstname+'</li><li>LastName : ' + req.body.lastname +'</li><li>Tel. Num : ' + req.body.telnum +'</li><li>Email :'+req.body.emailid+'</li><li>Preferred Channel :' +req.body.approve +'</li><li> Feedback:'+req.body.feedback+'</li></ul>'
  }
  transporter.sendMail(mailOptions,function(error,info){
	  if(error){
		  console.log(error);
	  }else{
		  console.log('Message sent' +info.response);
	  }
  })
});
module.exports = router;