/* 

There are three syntax for creating a function is javascript

1. standard function syntax

function plus(a,b){

    return a+b;
}

2. function object syntax

let minus=function(a,b){
    return a-b;
}

*/


function plus(a,b){

    return a+b;
}

console.log(plus(2,3));

let minus=function(a,b){
    return a-b;

}

console.log(minus(2,3));

/* Es2015 Lambda function syntax 

    A lambda function is a simplified anonymous function

    let minus=function(a,b){
    return a-b;
    }

    can be written as

    let minus= (a,b) => {
        return a-b;
    };

    Note:
        1. No need of function keyword
        2. Use of fat arrow =>
        3. rest of the funciton is same as old one
*/


let multiply= (a,b)=>{
    return a*b;
};

console.log(multiply(2,3));

/* ES2015 simplifed lambda

If your lambda has single (return) statement you can make it even more simple

* you can remove the function braces {}
* you can remove the return keyword

let divide = (a,b) => a/b
*/

let divide=(a,b)=>a/b;

console.log(divide(5,2));

