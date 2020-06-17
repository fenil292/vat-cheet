var express=require('express');
var socket=require('socket.io');
var http = require('http');
var app=express();
//const path = require('path');
const port = process.env.PORT || 8080;
var server = http.createServer(app);
/*var server = http.createServer(function(req,res){
	res.send('server created');
});*/
/*var serever=app.listen(port,function(){
	console.log("hello world");
	console.log(path.join(__dirname + '/../../index.php'));
});
app.get('/',function(req,res){
	//res.redirect("../index.php");
	res.redirect(path.join(__dirname + '/../../index.php'));
});*/

 var io = socket.listen( server );

 io.sockets.on( 'connection', function( client ) {
 	console.log( "New client !" );
	
 	client.on( 'message', function( data ) {
 		console.log( 'Message received ' + data.name + ":" + data.message + ":" + data.time);
 		//client.broadcast.emit( 'message', { name: data.name, message: data.message } );
 		io.sockets.emit( 'message', { name: data.name, message: data.message,time: data.time } );
 	});
 });

server.listen(port);
//app.use(express.static('public'));
