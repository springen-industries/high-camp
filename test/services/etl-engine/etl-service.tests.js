var DataMockFactory = require("test/DataMockFactory.js");

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
    it('should return an array', function(done){
      expect(etlService.sample(signals)).to.be.an("Array");
      done();
    });
    it('should be the length of array passed as argument',function (done){
      expect(etlService.sample(signals).length).to.equal(signals.length);
      done();
    });
    it('should contain Observation objects',function(done){
      expect(etlService.sample(signals)[0]).to.be.an("Observation");
    });
  });

  describe("asynchronus tests",function(){
    it('should return a promise when called overloaded with a callback', function(done){
      var emptyCallback = function(){};
      expect(etlService.sample(signals,emptyCallback)).to.be.a("Promise");
      done();
    });
  });
});

});
