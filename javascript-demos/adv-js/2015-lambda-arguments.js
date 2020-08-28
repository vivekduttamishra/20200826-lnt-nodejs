

let sum=function(){
    let total=0;
    for(let i=0;i<arguments.length;i++)
        total+=arguments[i];

    return total;
}

console.log(sum(1,2,3,4));

let avg=()=>{
    let total=0;
    console.log('arguments',arguments);
    for(let i=0;i<arguments.length;i++)
        total+=arguments[i];

    return total/arguments.length;
}

console.log(avg(1,2,3,4));