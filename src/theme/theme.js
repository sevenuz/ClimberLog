var theme = {};

//datePicker
theme.datePicker = {
  THEME_TRADITIONAL : 1,
  THEME_HOLO_DARK : 2,
  THEME_HOLO_LIGHT : 3,
  THEME_DEVICE_DEFAULT_DARK : 4,
  THEME_DEVICE_DEFAULT_LIGHT : 5,
}

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
  if (prop) {
    return theme.data[clas][prop];
  }else {
    return theme.data[clas];
  }
}

theme.getIcon = function (icoName) {
  return theme.data["icon_path"] + icoName + ".png";
}

theme.setTheme('default');

module.exports = theme;
