var mongoose = require('mongoose');

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

function createSignals(){

    var Signal = mongoose.model('signal', signalSchema);
    var gmail = new Signal({mode:"batch", target:"api.gmail.com", sampleTime: new Date().getTime() });
    var pingSensor = new Signal({mode:"poll", target:"/dev/ttyACM0", sampleTime:new Date().getTime() } );

   function signalEngine(){

       this.list  = function() {
         return [];
     }
   }
   return new signalEngine();

}

function MockFactory(){}


MockFactory.prototype = {
  createSignals: createSignals
}
 var mockFactory = new MockFactory();
module.exports = mockFactory

// console.log(mockFactory.createSignals().list());
