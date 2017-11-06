var mongoose = require('mongoose');
global.SignalSchema = new mongoose.Schema({
     signal: {
       mode: String,
       target: String,
       sampleTime: String,
       lastReading:  Object}
     }
    //  schedule: {
    //    type: Long, min: 2600 }
   );
