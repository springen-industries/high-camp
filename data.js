var mongoose = require('mongoose');


function createSignals(){
    var signalSchema = new mongoose.Schema({
         signal: {
           mode: String,
           target: String,
           sampleTime: String,
           lastReading:  Object}
         }
        //  schedule: {
        //    type: Long, min: 2600 }
       );
    var Signal = mongoose.model('signal', signalSchema);
    var gmail = new Signal({mode:"batch", target:"api.gmail.com", sampleTime: new Date().getTime() });
    var pingSensor = new Signal({mode:"poll", target:"/dev/ttyACM0", sampleTime:new Date().getTime() } );

    var mockSignals = function signalsObject(){
        var collection = [gmail,pingSensor];
        this.list = function(){
          return collection.map;
        }
    }
    return new mockSignals();
}

function MockFactory(){}


MockFactory.prototype = {
  createSignals: createSignals
}

var mockFactory = new MockFactory();
module.exports = mockFactory;
