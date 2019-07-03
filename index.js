// // //console.log('Hello from Node.js ....');
// // const Person = require('./person');
// // //console.log(person);
// // const person1 = new Person('John', 45);
// // person1.greeting();
// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message', (data) => console.log('called Listener:', data));
// logger.log('Hello Woled');
const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
	if (req.url == '/') {
		res.end('<h1>Hello Home</h1>');
	}
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port:${PORT}`));
