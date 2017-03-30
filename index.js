// load module
const http = require('http');

//set port number
const PORT = process.env.PORT || 5000;

function handleRequest(res,res) {
	res.end('<h1>Welcome to my webpage. Kick back, relax, stay a while.</h1>');
}

const server = http.createServer(handleRequest);

//Start up our server
server.listen(PORT, ()=>{
	console.log("Server is listening on port ${PORT}`);
});