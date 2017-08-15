const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
    
  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have a length of 4', () => {
      const apples = cases.apples;
      expect(apples).to.have.length(4); // Begin here something is wrong, fix it.
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should contain Red Delicious', () => {
      const apples = cases.apples;
      expect(apples).to.contain('Red Delicious'); // Begin here something is wrong, fix it.
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should have favorite of Beastie Boys', () => {
      const Ben = cases.Ben;
      expect(Ben).to.have.property('favBand','Beastie Boys');
    });

  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('should be an favorite band', () => {
      const Sean = cases.Sean;
      expect(Sean).to.have.property('favFood','Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('should be an not favorite book', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.not.have.property('favBook','Harry Potter');
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('should be not favorite color', () => {
      const Austen = cases.Austen;
      expect(Austen).to.not.have.property('favColor','Gold');
    });
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.have.property('favActivity','Rock Climbing');
    });
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
    });
    // write a test to check if 'addNums' returns the expected value
      // i.e. if is called addNums(1, 2); the return value should be 3.
      it('should return a sum number when 1 and 2 are passed', () => {
        //const addNums = cases.addNums();
        //expect(addNums).to.eql(addNums);
        const addNums = cases.addNums;
        const result = addNums(1,2);
        assert.equal(result,3);
      });   
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      newCbInvoker(callBack);
      expect(callBack).to.have.calledOnce;
     // console.log("CALLBACK SPY: ", callBack.callCount);
      // pass our spy `callBack` to our newCbInvoker fn. 
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
        //assert.typeOf(callBack, 'function'); // test with "array"
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
       // const callBack = sinon.spy();
       // callBack.callBacker(callBack);
       // expect(cb).to.have.been.callcount(cb);
        const spy = sinon.spy();
        const num = 0;
        const iterator = cases.iterator;
        iterator(num, spy);
        expect(spy).to.have.callCount(0);
        
    });
  });

  
});
