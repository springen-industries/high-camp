
function RolesController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

RolesController.prototype = {
  get: get
};

var rolesController = new RolesController();

module.exports = rolesController;
