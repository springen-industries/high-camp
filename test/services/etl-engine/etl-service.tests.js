var DataMockFactory = require("test/DataMockFactory.js");

describe('EtlService Tests', function() {

  describe('collectInput', function() {
    it('should be a function', function(done) {
      expect(etlService.collectInput).to.be.a('function');
      done();
    });

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

    it('TODO: FIX SINON SPY -should call sample for every element in signal array ', function(done){
    //   etlSpy = sinon.spy(etlService,"sample");
    //   if (etlSpy.stackTrace.indexOf("Error") > 0) {
    //     throw new new exception(etlSpy.stackTrace);
    //   }
    //   var etlResult = etlService.collectInput(signals);
    //   expect(etlSpy.callCount).to.equal(signals.length);
      done();
    });
  });
  //asynchronus testss
  describe('colectInput -- Response', function(){
    it('should return a promise when called with asynch overload', function(done){
       expect(etlService.collectInput(signals,callback)).to.be.a("Promise");
       done();
    });
  });

  describe('sample', function(){
    it('should exist in etlService', function(done){
      expect(etlService.sample).to.be.a("function");
      done();
    });
    it('should return a promise when called overloaded asynchronusly', function(done){
      expect(etlService.sample(signals,function (){})).to.be.a("Promise");
      done();
    });
  });

});
