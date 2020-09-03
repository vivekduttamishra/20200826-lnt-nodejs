var {isPrime}=require('../src/prime');
var {should,expect}=require('chai');
should();


describe('isPrime (async) Tests',function ( ) {
    
    beforeEach(function(){
       console.log('I run before each test'); 
    });
    
    afterEach(function(){
        console.log('I run after each test');
    });
    
   
    it('should return true for 2',function ( ) {
        
        isPrime(2,function  (err,result) {
            result.should.be.true;
        });
        
        
    });
    
    it('should return error for NAN', function(){
       
        isPrime(2,function(err,result){
           expect(err).to.be.null; 
        }); 
        
    });
    
    
});