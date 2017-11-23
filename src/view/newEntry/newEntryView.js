const {
  Action,
  Page,
  NavigationView,
  Composite,
  TextInput,
  TextView,
  ImageView,
  device
} = require('tabris');
theme = require('../../theme/theme');
language = require('../../language/language');

personalData = require('./personalData');
locationData = require('./locationData');

let view = new NavigationView({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  drawerActionVisible: true
});

let safeAction = new Action({
  image: {
    src: theme.getIcon("ic_done"),
    scale: 3
  },
  placementPriority: 'high'
}).appendTo(view);

let page = new Page({
  class: 'main-background newEntry-backgound',
  id: 'newEntryPage',
  autoDispose: false,
  padding: 20
}).appendTo(view);



page.append(personalData.personalData);
page.append(personalData.personalDataCollapse);

page.append(locationData.locationData);
page.append(locationData.locationDataCollapse);


theme.setTheme('default', view);
language.setLanguage('default', view);
module.exports = {
  view: view,
  page: page,
  safeAction: safeAction,
  personalData: personalData,
  locationData: locationData
};
