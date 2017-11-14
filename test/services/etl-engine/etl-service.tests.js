var DataMockFactory = require("test/DataMockFactory.js");
var mongoose = require('mongoose');

describe('EtlService Tests', function() {

  describe('function collectInput', function() {

    it('should be a function', function(done) {
      expect(etlService.collectInput).to.be.a('function');
      done();
    });
    describe('synchronus tests', function(){
      it('should iterate over signals using forEach', function(done) {
        var mock = sinon.mock(signals).expects("forEach").atLeast(1);
        etlService.collectInput(signals);
        mock.verify();
        done();
      });


      /// synchronus tests
      it('should return an array',function(done) {
        var etlResult = etlService.collectInput(signals);
        expect(etlResult).to.be.an('Array');
        done();
      });

      it('should return the same number of objects that get passed', function(done){
        var etlResult = etlService.collectInput(signals);
        expect(etlResult.length).to.not.equal(0);
        done();
      });
  });
  describe("asynchronus tests", function(){
  //asynchronus testss
      it('should return a promise', function(done){
         expect(etlService.collectInput(signals,callback)).to.be.a("Promise");
         done();
      });
  });
});
// sample tests
describe('function - sample', function(){
  it('should exist in etlService', function(done){
    expect(etlService.sample).to.be.a("function");
    done();
  });

  describe("synchronus tests", function(){
    it('should reurn an object of type sample',function(done){
      var sample = etlService.sample(signals[0]);
      /*TODO: figure out a better way to reflect type names than this
        or at least wrap the data object in a sample object
      */
      expect(sample.typeName).to.equal("Sample");
      done();
    });
  });

  describe("asynchronus tests",function(){
    it('overloading with callback should return a promise', function(done){
      var emptyCallback = function(){};
      expect(etlService.sample(signals,emptyCallback)).to.be.a("Promise");
      done();
    });
    it('should resolve',function(done){
      var callbackSpy = sinon.spy;
      var promise = etlService.sample(signals,callbackSpy);
      promise.then( (result) => {
          expect(result).to.equal('promise resolved');
        }).then(done, done);
    });
    it('should call the callback on resolved',function(done){
      var callbackSpy = sinon.spy;
      var promise = etlService.sample(signals,callbackSpy);
      promise.then( (result) => {
          expect(callbackSpy.called).to.equal(true);
        }).then(done, done);
    });
  });
});

});
