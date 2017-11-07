
require("app/data.js");
global.mockFactory = require('test/DataMockFactory.js');
global.chai = require("chai");
global.sinon = require("sinon");
global.sinonChai = require("sinon-chai");
var EtlService = require('app/services/etl-engine/etl-service.js');

beforeEach(function() {
  global.etlService = new EtlService();
  global.signals = mockFactory.createSignals();
  global.expect = chai.expect;
  chai.use(sinonChai);
  global.callback = sinon.spy();
});
