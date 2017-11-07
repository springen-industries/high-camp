


function ServiceMocks () {

}

function mailEndpoint(request) {
  return request
}

ServiceMocks.prototype = {
  mailEndpoint: mailEndpoint
}


module.exports = new ServiceMocks();
