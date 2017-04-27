var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.on('test', function (data) {
		console.log('Test triggered');
		console.log(data);

		socket.broadcast.emit(data.key, data.data);
	});
});

server.listen(3000);