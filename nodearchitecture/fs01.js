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

const fs= require('fs');
dirName='temp';
try{
    console.log(`creating a directory ${dirName}...`);
    fs.mkdirSync(dirName);
    console.log('created');
}catch(e){
    console.log('failed to create directory');
    if(fs.existsSync(dirName)){
        console.log('directory exists, trying to remove it')
        fs.rmdirSync(dirName)
    } else {
        console.log('you may not have permission ');
    }

}
