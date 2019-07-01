const url = require('url');
const myUrl = new URL('https://myweb.com:8000/hello.html?id=100&status=active');
//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
//host (rootname) it gets the port name
console.log(myUrl.host);
//hostname does not gaet port
console.log(myUrl.hostname);
//Pathname
console.log(myUrl.pathname);
//serialized query
console.log(myUrl.search);
//params object
console.log(myUrl.searchParams);
//add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
