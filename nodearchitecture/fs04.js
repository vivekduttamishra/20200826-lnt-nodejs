const fs=require('fs');

let path='testfile.txt';

console.log('reading the file');

//reads whole data in one go.
//not a great idea

console.log('reading',path);


// you will read data async way
// but you still get all data as a single block stored in memory
// may be a problem for huge file
fs.readFile(path, (error,data)=>{
    if(error)
        process.stderr.log('failed to read '+path);
    else{
        console.log('---content---');
        process.stdout.write(`total data is ${data.length}`);    
        console.log('---end of content---');
    }
});

//last function is async and we reach here even before the read is over
console.log('please wait while we read');

