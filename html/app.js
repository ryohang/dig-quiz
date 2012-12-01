
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

var SendGrid = require('sendgrid').SendGrid;
// var sendgrid = new SendGrid(process.env.USER, process.env.PASS);
var sendgrid = new SendGrid("quizital", "b1234567");
var Email = require('sendgrid').Email;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});
app.get('/sendemail', function(req, res){
  var email = new Email({
    to: 'pitukia@gmail.com',
    from: 'pitukia@gmail.com',//ryo.hang
    subject: 'Questionair complete',
    text: 'You have successfuly completed the quiz with a score of 80%. Move on to a better future. Thanks SendGrid your API Rocks!!!'
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
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
