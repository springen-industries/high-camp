
function EtlService() {
}

function collectInput(services) {
    //get the samples array
    //console.log(services);
    services.list();
}

EtlService.prototype = {
  collectInput: collectInput
};

var etlService = new EtlService();

module.exports = etlService;
