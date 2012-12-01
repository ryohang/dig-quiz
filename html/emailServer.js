var http = require('http');
var SendGrid = require('sendgrid').SendGrid;
// var sendgrid = new SendGrid(process.env.USER, process.env.PASS);
var sendgrid = new SendGrid("quizital", "b1234567");
var Email = require('sendgrid').Email;
var port = process.env.port || 1337;

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});

  var email = new Email({
      to: 'ryo.hang@gmail.com',
      from: 'ryo.hang@gmail.com',
      subject: 'Questionair complete',
      text: 'A Node.js email through SendGrid and Azure. Amazing!'
  });

//   email.addFilterSetting('footer', 'enable', 1);
//   email.addFilterSetting('footer', 'text/html', '<strong>What?!? A footer! w00t!</strong>');

  sendgrid.send(email, function(success, message) {
	console.log(message);
    if (!success) {
				// console.log(res);
                res.end("Error sending mail. First cry, then check your logs.\n");
    } else {
                res.end("Email sent successfully! You are a boss!\n");
    }
  });
}).listen(port);