

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
     var promises = [];
     signals.forEach(function sampleSignal(signal){
       promises.push(sample(signal,callback));
     });
   });
 }



function sample(signal, callback){
  if (callback){
    return new Promise(function(fulfill, reject){
      get("https://google.com"), function(err, res) {
          if(err) reject(callback(err));
          else resolve(callback(res));
      }
    });
} else {
    return 0;
  }
}

EtlService.prototype = {
  collectInput: collectInput,
  sample: sample,
  collectInputSynch: collectInputSynch,
  collectInputAsynch: collectInputAsynch
};



module.exports = EtlService;
