
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
    it('should accept two arguements', function(done) {
      expect(etlService.collectInput).to.not.be.arguments;
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