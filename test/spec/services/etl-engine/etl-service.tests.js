
describe('EtlService Tests', function() {

  var etlService;

  beforeEach(function() {
    etlService = require('../../../../app/services/etl-engine/etl-service');
  });

  describe('lookupEtl', function() {

    it('should be a function', function(done) {
      expect(etlService.lookupEtl).to.be.a('function');
      done();
    });

  });
});
