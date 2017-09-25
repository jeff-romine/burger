var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(obj, cb) {
    orm.create("burgers", obj, function(res) {
      cb(res);
    });
  },
  update: function(id,obj, cb) {
    orm.update("burgers", id, obj, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
