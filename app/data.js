var mongoose = require('mongoose');
global.SignalSchema = new mongoose.Schema({
     signal: {
       identifier:  mongoose.Schema.Types.ObjectId,
       mode: String,
       target: String,
       lastReading:  Object
     },
     observation: {
       sampleTime: {type: Date, default: Date.now},
       signalIdentifier: mongoose.Schema.Types.ObjectId,
       reading: Object
      }
     });
