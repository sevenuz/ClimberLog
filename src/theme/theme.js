var theme = {};

theme.applyTheme = function(elems) {
  if (elems[0]) {
    for (var i = 0; i < elems.length; i++) {
      elems[i].apply(theme.data);
    }
  }else {
    elems.apply(theme.data);
  }
};

theme.setTheme = function(name, elems) {
  try {
    theme.data = require('./' + name);
  } catch(e) {
    console.error("Theme " + name + " doesnt exist. Load Default.");
    theme.data = require('./default');
  }
  if (elems) theme.applyTheme(elems);
};

theme.get = function(clas,prop) {
  return theme.data[clas][prop];
}

theme.getIcon = function (icoName) {
  return theme.data["icon_path"] + icoName + ".png";
}

theme.setTheme('default');

module.exports = theme;
