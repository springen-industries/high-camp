global.mockFactory = require('../data.js');
global.chai = require("chai");
global.sinon = require("sinon");
global.sinonChai = require("sinon-chai");

global.signals = mockFactory.createSignals();

beforeEach(function() {

  global.expect = chai.expect;
  chai.use(sinonChai);

});
