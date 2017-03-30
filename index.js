// load modules
const http: require('http');

//set port number
const PORT = process.env.PORT || 8080;

function handleRequest(res,res) {
	res.end('<h1>Welcome to my webpage. Kick back, relax, stay a while.</h1>');
}

const server = http.createServer(handleRequest);

//Start up our server
server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
} 