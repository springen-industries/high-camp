require("app/data.js")
var mongoose = require('mongoose');

function DataMockFactory(){

}

function createSignals(){
    var Signal = mongoose.model('signal', SignalSchema);
    var gmail = new Signal({mode:"batch", target:"api.gmail.com", sampleTime: new Date().getTime() });
    var pingSensor = new Signal({mode:"poll", target:"/dev/ttyACM0", sampleTime:new Date().getTime() } );
    return [gmail,pingSensor];
}
function createSample(){
  var Sample = mongoose.model('sample', SignalSchema);
  var sample = new Sample({ reading: 0});
  return sample;

}
  DataMockFactory.prototype = {
    createSignals: createSignals,
    createSample: createSample
  }



// console.log(mockFactory.createSignals().list());
module.exports = new DataMockFactory()
