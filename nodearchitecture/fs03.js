const fs=require('fs');

let path='testfile.txt';

console.log('reading the file');

//reads whole data in one go.
//not a great idea
let data=fs.readFileSync(path);

//you reach here only after data is read
console.log('please wait while we read');

console.log('---content---');

process.stdout.write(`total data is ${data.length}`);

console.log('---end of content---');