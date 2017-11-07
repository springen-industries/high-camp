var DataMockFactory = require("test/DataMockFactory.js");

describe('EtlService Tests', function() {

 beforeEach(function(){

   var signals = DataMockFactory.createSignals();

  })







<<<<<<< HEAD
=======
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
>>>>>>> dev.etl.collectInput

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
      it('should call sample for every element in signal array ', function(done){
        etlSpy = sinon.spy(etlService,"sample");
        var etlResult = etlService.collectInput(signals);
        // console.log(etlSpy);
        expect(etlSpy.callCount).to.equal(signals.length);
        done();
      });

    //asynchronus testss
    describe('colectInput -- Response', function(){
      it('should set up an asynch callbackSpy for when sample operation completes', function(done){
         etlResult = etlService.collectInput(signals,callback);
         expect(callback.called).to.be.true;
         done();
        });
      });
    });

describe('beginStateLoop', function() {
    it('should be a function', function(done) {
      expect(etlService.beginStateLoop).to.be.a('function');
    });
  });





});
