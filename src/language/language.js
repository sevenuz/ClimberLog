var language = {};

language.applyLanguage = function(elems) {
  if (elems[0]) {
    for (var i = 0; i < elems.length; i++) {
      elems[i].apply(language.data);
    }
  }else {
    elems.apply(language.data);
  }
};

language.setLanguage = function(name, elems) {
  if (name === "default") {
    name = "en";
  }
  try {
    language.data = require('./' + name);
  } catch(e) {
    console.error("Language " + name + " doesnt exist. Load English.");
    language.data = require('./en');
  }
  if (elems) language.applyLanguage(elems);
};

language.get = function(clas,prop) {
  return language.data[clas][prop];
}

language.setLanguage('en');

module.exports = language;
