//core module path so no need to import
const path = require('path');
// base file name
console.log(path.basename(__filename));

//directory name

//console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));
//crete path object
console.log(path.parse(__filename));
//concetante path
//../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
