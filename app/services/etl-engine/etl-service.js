
function EtlService() {
}

function lookupEtl(id) {
  return { id: id };
}

EtlService.prototype = {
  lookupEtl: lookupEtl
};

var etlService = new EtlService();

module.exports = etlService;
