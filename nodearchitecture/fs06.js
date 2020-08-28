const fs=require('fs');

let source='testfile.txt';
let target='testfile2.txt';


//copy data from src to target

let src= fs.createReadStream(source);
let trgt= fs.createWriteStream(target);
let readCount=0;
let writeCount=0;
//set the necessary events
let firstTime=true;
let buffer='';

src
    //when we read some data
    .on('data', data=>{
        readCount++;
        process.stdout.write('-');
        if(firstTime){
            trgt.write(data.toString());
            firstTime=false;
        } else{
            buffer+=data.toString();
        }
    })    
    .on('end',()=>{
        trgt.close(); //close the target
        console.log(`file copied in ${readCount} iteration`);
    })
    .on('error',(err)=>console.log(`error reading ${source}`))
    

trgt
    .on('error', error=>console.log('error writing to target',error.message))
    .on('close', ()=> console.log(`${target} is closed`))
    .on('drain',()=>{
        //I am ready to consume the data
        //step1: stop read stream from sending any more data till I consume what I have on my plate
        src.pause(); //please stop sending data for now
        
        trgt.write(buffer, error=>{
            if(!error){
                buffer=''; //i have written everything
                process.stdout.write('+'); //I have consumed
                writeCount++;
                src.resume();
            }
        })
    });

    console.log('please wait while we read the data...');
    