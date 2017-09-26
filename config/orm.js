var connection = require("./connection.js");

var orm = {
  all: function (tableName, callback) {
    var queryString = "SELECT * FROM ?? order by id";
    connection.query(queryString, [tableName],
        function (err,res) {
            if (err) {
                throw "SELECT Failed for: " + tableName;
            }
            else {
                callback(res);
            }
        });
  },

  create: function (tableName, obj, callback) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString,[tableName,obj],callback);
  },

  updateById: function (tableName,id,obj,callback) {
    var queryString = "UPDATE ?? SET ? where id=?";
    connection.query(queryString,[tableName,obj,id],callback);
  }
};

module.exports = orm;
