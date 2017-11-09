

function EtlService() {
}

function collectInput(signals, callback) {
  return new Promise(function(fulfill,reject){
     signals.forEach(function sampleSignal(signal){
       sample(signal.target,signal.protocol);
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
