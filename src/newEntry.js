theme = require('./theme/theme');
language = require('./language/language');

var moment = require('./res/moment-with-locales');

const {
  view,
  safeAction,
  personalData
} = require('./view/newEntry/newEntryView');
var utils = require('./res/utils');

//when height of personalDataCollapse is calculated, set it global for toggleCollapse
personalData.personalDataCollapse.on('resize', (element) => {
  personalData.personalDataCollapse.height = element.height;
});

personalData.personalDataCollapseButton.on("tap", function() {
  utils.toggleCollapse(this, personalData.personalDataCollapse);
  personalData.shortInfoLeftView.set({
    text: personalData.date.text
  });
  utils.toggleCollapse(false,personalData.shortInfoLeftView);
  personalData.shortInfoRightView.set({
    text: personalData.leadClimbingInput.text + ", " + language.get("you")
  });
  utils.toggleCollapse(false,personalData.shortInfoRightView);
});

view.find("#newEntryRopedPartyInput").on("accept", function(e) {
  personalData.leadClimbingInput.text = e.text.split(/,\s*/)[0];
});

//view.find('#newEntryDate').set("text",moment().format('LL'));
personalData.date.text = moment().format('LL');

personalData.date.on("tap", function() {
  let self = this;
  datePicker.show({
    date: moment().toDate(),
    mode: 'date',
    todayText: language.get("datePickerTodayText"),
    androidTheme: theme.datePicker.THEME_DEVICE_DEFAULT_DARK,
    cancelText: language.get("datePickerCancelText"),
  }, function(date) {
    self.text = moment(date).format('LL');
  }, function(err) {});
});





locationData.locationDataCollapse.on('resize', (element) => {
  locationData.locationDataCollapse.height = element.height;
});

locationData.locationDataCollapseButton.on("tap", function() {
  utils.toggleCollapse(this, locationData.locationDataCollapse);
  locationData.shortInfoLeftView.set({
    text: locationData.countryInput.text + "/" + locationData.areaInput.text + "/" + locationData.summitInput.text
  });
  utils.toggleCollapse(false,locationData.shortInfoLeftView);
});

module.exports = view;
