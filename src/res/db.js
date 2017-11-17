
var Collection = require('nedb');
var db = {};

db.Users = new Collection({ filename: Collection.fs.filesDir + "/Users.db", autoload: true });//new Collection({ filename: fs.filesDir + "/Users.db", autoload: true });

db.getAllData = function () {
  return {
    Users: db.Users.getAllData(),
  };
};

db.getAllDataJSON = function () {
  return JSON.stringify(db.getAllData());
};



module.exports = db;
//module.exports = require('nedb');
