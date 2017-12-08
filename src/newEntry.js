theme = require('./theme/theme');
language = require('./language/language');

var moment = require('./res/moment-with-locales');

const {
  view,
  safeAction,
  locationData,
  personalData
} = require('./view/newEntry/newEntryView');
var utils = require('./res/utils');
var options = require('./res/options');

var newEntry = {
  date:moment().toDate(),
};

function togglePersonalDataCollapse() {
  utils.toggleCollapse(personalData.personalDataCollapseButton, personalData.personalDataCollapse);
  personalData.shortInfoLeftView.set({
    text: personalData.date.text
  });
  utils.toggleCollapse(false, personalData.shortInfoLeftView);
  personalData.shortInfoRightView.set({
    text: personalData.leadClimbingInput.text + ", " + language.get("you")
  });
  utils.toggleCollapse(false, personalData.shortInfoRightView);
}

personalData.personalDataCollapseButton.on("tap", function() {
  togglePersonalDataCollapse();
});

view.find("#newEntryRopedPartyInput").on("blur", function(e) {
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
    newEntry.date = date;
    self.text = moment(date).format('LL');
  }, function(err) {});
});



function toggleLocationDataCollapse() {
  utils.toggleCollapse(locationData.locationDataCollapseButton, locationData.locationDataCollapse);
  locationData.shortInfoLeftView.set({
    text: locationData.countryInput.text + "/" + locationData.areaInput.text + "/" + locationData.summitInput.text
  });
  utils.toggleCollapse(false, locationData.shortInfoLeftView);
}

locationData.locationDataCollapseButton.on("tap", function() {
  toggleLocationDataCollapse();
});




safeAction.on('select', function(e) {
  console.log("safe new entry");
  if (validateNewEntry()) {
    newEntry.title = personalData.titleInput.text;
    newEntry.ropedParty = personalData.ropedPartyInput.text;
    newEntry.leadClimbing = personalData.leadClimbingInput.text;
    newEntry.way = locationData.wayInput.text;
    newEntry.summit = locationData.summitInput.text;
    newEntry.area = locationData.areaInput.text;
    newEntry.country = locationData.countryInput.text;
  }else {
    console.log("Es sind noch nicht alle Felder ausgefüllt. Speichern Fehlgeschlagen!");
  }
});

function validateNewEntry() {
  if (options.validateNewEntry) {
    if (personalData.titleInput.text.trim() == "") return false;
    if (personalData.ropedPartyInput.text.trim() == "") return false;
    if (personalData.leadClimbingInput.text.trim() == "") return false;
    if (locationData.wayInput.text.trim() == "") return false;
    if (locationData.summitInput.text.trim() == "") return false;
    if (locationData.areaInput.text.trim() == "") return false;
    if (locationData.countryInput.text.trim() == "") return false;
  }
  return true;
}

module.exports = view;
