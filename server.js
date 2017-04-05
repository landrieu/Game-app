var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var users = require('./routes/users');
var games = require('./routes/games');
var preferences = require('./routes/preferences');
var upload = require('./routes/upload');
var lfg = require('./routes/lfg');
var http = require('http');

var port = 3008;

var app = express();

//View engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set static folde
app.use(express.static(path.join(__dirname,'client')));

//Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);


//app.use('/outside',request);
app.use('/api',tasks);
app.use('/usr',users);
app.use('/gm',games);
app.use('/pfr',preferences);
app.use('/up',upload);
app.use('/lfg',lfg);
app.use('*',index);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});


