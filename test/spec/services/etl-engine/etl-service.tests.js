

describe('EtlService Tests', function() {



  describe('collectInput', function() {
    it('should be a function', function(done) {
      expect(etlService.collectInput).to.be.a('function');
      done();
    });

    it('should invoke list() on signals', function(done) {
      var mock = sinon.mock(signals).expects("list").atLeast(1);
      etlService.collectInput(signals);
      mock.verify();
      done();
    });

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
    it('should call off to signal.target with signal.protocl ', function(done){
      var etlMock =sinon.mock(etlService).expects('sample').once().withArgs({target: 'api.google.com/mail/all-mail', protocol: "HTTPS" authToken: "xxx", authMode: "OAuth2"});
      var etlResult = etlService.collectInput(signals);
      etlMock.verify();
      etlMock.restore();
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
