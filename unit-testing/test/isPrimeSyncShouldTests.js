var {isPrimeSync}=require('../src/prime');
var {should,expect}=require('chai');


should();

describe('isPrimeSync should',function ( ) {
   
    it('should return true for 2',function ( ) {
       
       isPrimeSync(2).should.be.true;
       
    });
    
    
    it('should return false for 1',function ( ) {
       
        isPrimeSync(1).should.equal(false);
      
    });
    
    
    it('should return false for 0',function ( ) {
       
        isPrimeSync(0).should.be.false;
      
    });
    
    
    it('should return false for evens',function ( ) {
       
        isPrimeSync(4).should.be.false;
        isPrimeSync(16).should.be.equal(false);
        isPrimeSync(20).should.not.be.true;
      
    });
    
    
    it('should return false for 9',function ( ) {
       
        var result=isPrimeSync(9);
        result.should.be.false;
    });
    
    
    it('should return true for 13',function ( ) {
       
        var result=isPrimeSync(13);
        result.should.not.be.equal(false);
    });
    
    it('should throw for non-numeric argument',function(){
       
        expect(function ( ) {
            isPrimeSync('hello');
        }).to.throw();
        
    });
    
    
    
    
    
    
});