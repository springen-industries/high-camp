
function EtlService() {
}

function collectInput(signals, callback) {
    signals.forEach(function sampleSignal(signal){
       sample(signal.target,signal.protocol);
     })
    //  console.log(callback,"JSON");
     if (callback != undefined && callback != null) {
       callback(signals);
       return;
     } else {
       return signals;
     }
}

function sample(targetURI,protocol){
    return 0;
}

EtlService.prototype = {
  collectInput: collectInput,
  sample: sample
};



module.exports = EtlService;
