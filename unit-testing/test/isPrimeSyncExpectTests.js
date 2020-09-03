var {expect}=require('chai');
var {isPrimeSync}=require('../src/prime');


describe('isPrimeSync expect',function ( ) {


   
    it ('should return true for 2',function ( ) {
        
        var result=isPrimeSync(2);  
        
        expect(result).to.be.true;
       
    }); 
    
    
    it('should return false for 1',function ( ) {
       
        expect(isPrimeSync(1)).to.equal(false);
      
    });
    
     
    it('should return false for 0',function ( ) {
       
        expect(isPrimeSync(0)).to.be.false;
      
    });
    
    
    it('should return false for evens',function ( ) {
       
        expect(isPrimeSync(4)).to.be.false;
        expect(isPrimeSync(18)).to.be.false;
      
    }); 
    
    
    it('should return false for 9',function ( ) {
       
        var result=isPrimeSync(9);
        expect(result).to.be.equal(false);
      
    });
    
    
    it('should return true for 13',function ( ) {
       
        var result=isPrimeSync(13);
        expect(result).to.be.not.equals(false);
    });
    
    
    
    
    
    
    
    
});