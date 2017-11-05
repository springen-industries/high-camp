
function EtlService() {
}

function collectInput(signals) {
    var sampleList = signals.list();
    return sampleList;
}

function sample(targetURI,protocol){
    return targetURI;
}

EtlService.prototype = {
  collectInput: collectInput,
  sample: sample
};



module.exports = EtlService;
