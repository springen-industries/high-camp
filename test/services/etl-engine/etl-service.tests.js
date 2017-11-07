var DataMockFactory = require("test/DataMockFactory.js");



describe('EtlService Tests', function() {
  beforeEach(function(){
    var signals = DataMockFactory.createSignals();
   })

describe('beginStateLoop', function() {
    it('should be a function', function(done) {
      expect(etlService.beginStateLoop).to.be.a('function');
    });
  });

});
