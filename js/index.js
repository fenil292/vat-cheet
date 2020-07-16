var express=require('express');
var socket=require('socket.io');
var http = require('http');
var app=express();
const path = require('path');
const port = process.env.PORT || 8080;
var server = http.createServer(app);
//const router = express.Router();
/*var server = http.createServer(function(req,res){
	res.send('server created');
});*/
/*var serever=app.listen(port,function(){
	console.log("hello world");
	console.log(path.join(__dirname + '/../index.php'));
});*/
app.set('view engine', 'php');

app.get('/',function(req,res){
          //res.send(path.join(__dirname));
	//res.send('<script>window.location.href="/../index.php";</script>');
	//res.sendFile("/../index.php");
        //res.sendFile(path.join(__dirname+'/public/index.php'));
	//res.redirect(path.join(__dirname + '/public/index.php'));
	res.render('index');
	//s.sendFile(path.join(__dirname+'/../index.php'));
	//res.redirect(path.join(__dirname+'/../index.php'));
        //res.sendFile('/index.php', { root: __dirname })

});
 var io = socket.listen( server );

 io.sockets.on( 'connection', function( client ) {
 	console.log( "New client !" );
	
 	client.on( 'message', function( data ) {
 		console.log( 'Message received ' + data.name + ":" + data.message + ":" + data.time);
 		//client.broadcast.emit( 'message', { name: data.name, message: data.message } );
 		io.sockets.emit( 'message', { name: data.name, message: data.message,time: data.time } );
 	});
 });
/*app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});*/
app.listen(port);
//app.use(express.static('public'));
