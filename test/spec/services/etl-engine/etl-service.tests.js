
describe('EtlService Tests', function() {

  var etlService;

  beforeEach(function() {
    etlService = require('../../../../app/services/etl-engine/etl-service');
  });

  describe('collectInput', function() {

    it('should be a function', function(done) {
      expect(etlService.collectInput).to.be.a('function');
      done();
    });

    /*
      do not not test method signatures as we pass arguments as objects
    */
    it('should invoke list() on signals', function(done) {
      //lets add some behavioral rules for our mock

      var mock = sinon.mock(signals).expects("list").atLeast(1);
      etlService.collectInput(signals);
      mock.verify();
      done();
    });

    it('should return an array',function(done) {
      var etlResult = etlService.collectInput(signals);
      expect(etlResult).to.be.an('Array');
      expect(etlResult.length).to.not.equal(0);
      done();
    });

  });







  // describe('parseSamples', function() {
  //   it('should be a function', function(done) {
  //     expect(etlService.parseSamples).to.be.a('function');
  //   });
  // });
  //
  // describe('processSamples', function() {
  //   it('should be a function', function(done) {
  //     expect(etlService.processSamples).to.be.a('function');
  //   });
  // });
  //
  // describe('beginStateLoop', function() {
  //   it('should be a function', function(done) {
  //     expect(etlService.beginStateLoop).to.be.a('function');
  //   });
  // });
  //
  // describe('completeStateLoop', function() {
  //   it('should be a function', function(done) {
  //     expect(etlService.completeStateLoop).to.be.a('function');
  //   });
  // });
  //
  //
  // describe('calculateStatefuls', function() {
  //   it('should be a function', function(done) {
  //     expect(etlService.calculateStatefuls).to.be.a('function');
  //   });
  // });



});
