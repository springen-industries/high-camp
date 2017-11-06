
function EtlService() {
}

function collectInput(signals) {
     signals.forEach(function sampleSignal(signal){
       sample(signal.target,signal.protocol);
     })
     return signals;
}

function sample(targetURI,protocol){
    return 0;
}

EtlService.prototype = {
  collectInput: collectInput,
  sample: sample
};



module.exports = EtlService;
