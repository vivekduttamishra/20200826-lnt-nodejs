const fs=require('fs');

let source='testfile.txt';
let target='testfile2.txt';


//copy data from src to target

let src= fs.createReadStream(source);
let trgt= fs.createWriteStream(target);


src
    .on('read',data=>process.stdout.write(' + '))
    .pipe(trgt)
    .on('finish', ()=>console.log('copy successful'));



console.log('please wait while we read the data...');
    