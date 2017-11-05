global.mockFactory = require('../data.js');
global.chai = require("chai");
global.sinon = require("sinon");
global.sinonChai = require("sinon-chai");


beforeEach(function() {

  global.signals = mockFactory.createSignals();
  global.expect = chai.expect;
  chai.use(sinonChai);

});
