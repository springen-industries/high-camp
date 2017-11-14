var mongoose = require('mongoose');

global.SignalSchema = new mongoose.Schema({
     signal: {
       identifier:  mongoose.Schema.Types.ObjectId,
       typeName: {type: String, default: "Signal"},
       mode: String,
       target: String,
       lastReading:  Object
     },
     sample: {
       typeName: {type: String, default: "Sample"},
       sampleTime: {type: Date, default: Date.now},
       signalIdentifier: mongoose.Schema.Types.ObjectId,
       reading: Object
      }
     });

function DataService(){}

function createSample(signal,reading) {
  var Sample = mongoose.model("sample",SignalSchema);
  var sample = new Sample({signalIdentifier: signal.signalIdentifier, reading:reading});
  return sample;
}

DataService.prototype = function(){
  createSample: createSample
}
