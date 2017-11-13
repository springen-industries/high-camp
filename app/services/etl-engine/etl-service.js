

function EtlService() {
}

function collectInput(signals, callback) {
  if (callback){
    console.log("calling asynchronusly");
    collectInputAsynch(signals,callback);
  } else {
    console.log("calling synchronusly")
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
       promises.push(sample(signal.target,signal.protocol,callback));
     });
   });
 }



function sample(signal, callback){
  if (callback){
    return new Promise(function(fulfill, reject){
      get("https://google.com"), function(err, res) {
          if(err) reject(err);
          else resolve(res);
      }
    });
} else {
    return 0;
  }
}

EtlService.prototype = {
  collectInput: collectInput,
  sample: sample
};



module.exports = EtlService;
