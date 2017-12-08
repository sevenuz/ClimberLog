const {
  Action,
  Page,
  NavigationView,
  ScrollView,
  device
} = require('tabris');
theme = require('../../theme/theme');
language = require('../../language/language');
utils = require('../../res/utils');

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

let scrollView = new ScrollView({
  class: 'main-background newEntry-backgound',
  id: 'newEntryScrollView',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
}).appendTo(page);



scrollView.append(personalData.personalData);
scrollView.append(personalData.personalDataCollapse);

scrollView.append(locationData.locationData);
scrollView.append(locationData.locationDataCollapse);

/*
view.find('*').on('resize', function(e) {
  //console.log(e.target.id, e.top);
  utils.setPropertiesOnResize(e);
});
view.on('resize', utils.setPropertiesOnResize);
*/

theme.setTheme('default', view);
language.setLanguage('default', view);
module.exports = {
  view: view,
  page: page,
  safeAction: safeAction,
  personalData: personalData,
  locationData: locationData,
  scrollView: scrollView
};
