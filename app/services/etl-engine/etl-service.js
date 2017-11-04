
function EtlService() {
}

function collectInput(services) {
    var sampleList = services.list();
}

EtlService.prototype = {
  collectInput: collectInput
};

var etlService = new EtlService();

module.exports = etlService;
