var {isPrimeSync}=require('./src/prime');

var testIsPrime=function(num){
    process.stdout.write(`${num} is `);
    if(isPrimeSync(num))
        process.stdout.write("prime");
    else
        process.stdout.write("not prime");
    process.stdout.write("\n");
}
testIsPrime(2);
testIsPrime(8);
testIsPrime(9);
testIsPrime(1);
testIsPrime(5);

