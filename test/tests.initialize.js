
beforeEach(function() {


global.argFactory = getCollectInputArgs;

global.chai = require("chai");
global.sinon = require("sinon");
global.sinonChai = require("sinon-chai");
global.expect = chai.expect;
chai.use(sinonChai);
});


//very basic mock factory
function getCollectInputArgs(){
  return function collectInputArgsFactory(){
      this.samples =  [];
  }
}
