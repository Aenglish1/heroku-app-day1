var http = require('http');

const PORT=5000;

function handleRequest(req,resp){
	resp.end('<h1>Welcome to my webpage');
}

var server = http.createServer(handleRequest);

//star our server
server.listen(PORT, function(){
	//this is a callback
	console.log("Server is running on port: %s", PORT);
});