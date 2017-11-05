const {
  ui
} = require('tabris');

ui.drawer.enabled = true;

loginView = require('./login');
ui.contentView.append(loginView);
