theme = require('./theme/theme');
language = require('./language/language');

var moment = require('./res/moment-with-locales');

const {view, safeAction} = require('./view/newEntry/newEntryView');
var utils = require('./res/utils');

view.find("#newEntryPersonalDataCollapseButton").on("tap", function() {
  utils.toggleCollapse(this, view.find("#newEntryPersonalDataCollapse").first());
});

view.find("#newEntryRopedPartyInput").on("accept", function(e) {
  leadClimbingInput.text = e.text.split(/,\s*/)[0];
});

view.find('#newEntryDate').on("tap", function() {
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

module.exports = view;
