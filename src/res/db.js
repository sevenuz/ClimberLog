
var Collection = require('./nedb');
var db = {};

db.Users = new Collection({ filename: Collection.fs.filesDir + "/Users.db", autoload: true });//new Collection({ filename: fs.filesDir + "/Users.db", autoload: true });
db.Countries = new Collection({ filename: Collection.fs.filesDir + "/Countries.db", autoload: true });
db.Areas = new Collection({ filename: Collection.fs.filesDir + "/Areas.db", autoload: true });
db.Summits = new Collection({ filename: Collection.fs.filesDir + "/Summits.db", autoload: true });
db.Entries = new Collection({ filename: Collection.fs.filesDir + "/Entries.db", autoload: true });

db.getAllData = function () {
  return {
    Users: db.Users.getAllData(),
  };
};

db.getAllDataJSON = function () {
  return JSON.stringify(db.getAllData());
};

db.getIdentifyName = function (s) {
  s = s.replace(/[$§ß]/g, "s");
  s = s.replace(/@/g, "at ");
  s = s.replace(/€/g, "e");
  s = s.replace(/[öÖ]/g, "oe");
  s = s.replace(/[üÜ]/g, "ue");
  s = s.replace(/[äÄ]/g, "ae");
  s = s.replace(/ /g, "-");
  s = s.replace(/[^a-zA-Z0-9_\-]/g, "");
  return s;
};

db.saveNewEntry = function (ne) {

};

module.exports = db;
//module.exports = require('nedb');
