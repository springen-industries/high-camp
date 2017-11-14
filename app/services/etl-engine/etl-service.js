var mongoose = require('mongoose');

function EtlService() {
}

function collectInput(signals, callback) {
  if (callback){
    return collectInputAsynch(signals,callback);
  } else {
    return collectInputSynch(signals);
  }
}

function collectInputSynch(signals){
  var ra = [];
  signals.forEach(function sampleSignal(signal){
    ra.push(sample(signal.target,signal.protocol));
  });
  return ra;
}

function collectInputAsynch(signals,callback){
  return new Promise(function(fulfill,reject){
    try {
       var promises = [];
       signals.forEach(function sampleSignal(signal){
         promises.push(sample(signal.target,signal.protocol,callback));
       });
       fulfill(promises);
     } catch (err) {
       reject(err);
     }
   });
 }

function sample(signal,callback){
  if (callback){
    return sampleAsync(signal,callback);
  } else {
    return sampleSync(signal);
  }
}


function sampleAsync(signal, callback){

    return new Promise(function(fulfill, reject){
      sample(signal), function(err, res) {
          if(err) reject(err);
          else {
             resolve(res);
          };
      }
    });
  }

  function sampleSync(signal){
    var Sample = mongoose.model('sample', SignalSchema);
    var sample = new Sample({ reading: 0});
    return sample.sample;
  }


EtlService.prototype = {
  collectInput: collectInput,
  sample: sample,
  collectInputSynch: collectInputSynch,
  collectInputAsynch: collectInputAsynch
};



module.exports = EtlService;
