var isPrimeSync = function (number) {
    
    if(isNaN(number)){
        console.log('throwing...');
        throw 'invalid input';
    }
    
    if (number < 0) number *= -1;

    if (number < 2) return false;

    for (var i = 2; i < number; i++) {
        if (number % i == 0) return false;
    }
    return true; 
};

var isPrime = function (number, cb) {

    setTimeout(function () {
        if (isNaN(number)) {
            return cb(new Error('Not a number'), null);
        }
        var result = isPrimeSync(number);
        cb(null, result);
    }, 200);
};

module.exports.isPrimeSync=isPrimeSync;
module.exports.isPrime=isPrime;
