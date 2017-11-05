
function EtlService() {
}

function collectInput(signals) {
    var sampleList = signals.list();
    return sampleList;
}

function sampleSignal(signal){
  
}

EtlService.prototype = {
  collectInput: collectInput
};

var etlService = new EtlService();

module.exports = etlService;
