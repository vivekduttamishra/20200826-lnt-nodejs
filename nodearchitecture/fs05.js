const fs=require('fs');

let path='testfile.txt';

console.log('reading the file');

//reads whole data in one go.
//not a great idea

console.log('reading',path);

let size=0;
let readCount=0;

fs.createReadStream(path)
  .on('data', data=>{
    size+=data.length;  //total data read this time
    readCount++; //every read count tells you how many time 'data' arrived
    process.stdout.write('+')
  })
  .on('error', error=>{
      console.log('error',error)
  })
  .on('end', ()=>{
    process.stdout.write(`\ndone`);
    process.stdout.write('\ntotal bytes '+ size);
    process.stdout.write('\ntotal read count '+ readCount);

  });

  console.log('please wait while we fetch the data...');




//last function is async and we reach here even before the read is over
console.log('please wait while we read');

