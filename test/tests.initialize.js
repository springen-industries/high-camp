var mockFactory = require('../data.js');
global.chai = require("chai");
global.sinon = require("sinon");
global.sinonChai = require("sinon-chai");



var signals = mockFactory.createSignals();
global.signals = sinon.mock( signals   );


beforeEach(function() {
  sinon.assert.expose(chai.assert, { prefix: "" });
  global.expect = chai.expect;
  chai.use(sinonChai);

});
