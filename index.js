// var vs let vs const
// var -- classic javascript way of declaring variable
// const -- variable not supposed to change
// let -- variable can change
const http = require('http');
const PORT=process.env.PORT || 8080;

function handleRequest(req,resp){
	console.log("hitting this function");
	let msg = "Welcome to mord-haus, serving on " + PORT;
	console.log(msg, PORT, false || "asdf");

	// let a = "banana"
	// `string`    `string ${a} - ${a} - ${a} - ${a}`
	// "string"    "string" + a + " - " + a + " - "
	// 'string'
	resp.end(`<h1>${msg}</h1>`);
}

const server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function(){
	// This is a callback, get used to it now
	console.log("Server is running on port: %s", PORT);
});