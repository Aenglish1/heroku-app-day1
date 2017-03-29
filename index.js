var http = require('http');

const PORT= process.env.PORT || 5000;

function handleRequest(req,resp){
	resp.end('<h1>Hello, and welcome to my webpage');
}

var server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
	//this is a callback
	console.log("Server is running on port: %s", PORT);
});
