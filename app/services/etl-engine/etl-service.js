

function EtlService() {
}

function collectInput(signals, callback) {
  if (callback){
    collectInputAsynch(signals,callback);
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
     signals.forEach(function sampleSignal(signal){
       sample(signal.target,signal.protocol,callback);
     });
   });
 }



function sample(signal){
    return new Promise(function(fulfill, reject){
      get("https://google.com"), function(err, res) {
          if(err) reject(err);
          else resolve(res);
      }
    });
}

EtlService.prototype = {
  collectInput: collectInput,
  sample: sample
};



module.exports = EtlService;
