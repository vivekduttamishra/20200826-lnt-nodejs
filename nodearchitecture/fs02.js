/* 
fs is a buildin module in nodejs
Note:
    * when you import nodejs modules or npm installed modules you simply use the module name
    * when you import your own modules you must start them 
            *   with './'  to provide relative path from current directory
            *  or '../' to provide relative path from parent directory
            * 
    * you don't have to specify any path for standard modules

*/
//extracted only methods I need
const {mkdir,rmdir,exists}= require('fs');
dirName='temp';

//process is a standard nodejs object in global module
//no 'require' required

process.stdout.write(`creating directory ${dirName}...`);

mkdir(dirName, (err)=>{

    if(err){
        process.stdout.write('failed\n');
        exists(dirName, result=>{
            if(result){ //if directory exists
                //directory exists
                process.stdout.write('directory exists, deleting it...');
                rmdir(dirName,result=>{
                    if(!result)
                        process.stdout.write('deleted\n');
                    else
                        process.stdout.write('failed\n');
                })
            } else{
                process.stdout.write('you may not have write permission\n');
            }
        });
    } else{
        process.stdout.write('created\n');
    }

});




