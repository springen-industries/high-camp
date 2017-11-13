var mongoose = require('mongoose');
global.SignalSchema = new mongoose.Schema({
     signal: {
       identifier:  mongoose.Schema.Types.ObjectId,
       mode: String,
       target: String,
       sampleTime: {type: Date, default: Date.now},
       lastReading:  Object
     },
     observation: {
       sampleTime:  Number,
       signalIdentifier: mongoose.Schema.Types.ObjectId,
       reading: Object
      }
     });
