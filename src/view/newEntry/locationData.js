const {
  Composite,
  ImageView,
  TextInput,
  TextView
} = require('tabris');
//var TextPickerInput = require("../../widget/TextPickerInput");
var TextPickerInputAlone = require("../../widget/TextPickerInputAlone");
theme = require('../../theme/theme');
//language = require('../../language/language');


let locationData = new Composite({
  id: 'newEntryLocationData',
  layoutData: {
    left: 0,
    right: 0,
    top: ['prev()', 30], // label's bottom edge + 10px, i.e. 10px below label
  }
});

var locationDataCollapseButton = new ImageView({
  id: 'newEntryLocationDataCollapseButton',
  scaleMode: 'fit',
  layoutData: {
    width: 40,
    height: 40,
    top: 0,
    right: 0,
  },
  image: theme.getIcon("ic_expand")
}).appendTo(locationData);

var wayInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryWayInput',
  layoutData: {
    left: 0,
    right: 50,
    top: 0, // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(locationData);

var shortInfoRightView = new TextView({
  class: "default-text",
  id: 'newEntryShortLocationInfoRightView',
  alignment: 'right',
  opacity: 0,
  layoutData: {
    left: 0,
    right: 0,
    top: "#newEntryWayInput", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(locationData);

var shortInfoLeftView = new TextView({
  class: "default-text",
  id: 'newEntryShortLocationInfoLeftView',
  alignment: 'left',
  opacity: 0,
  layoutData: {
    left: 0,
    right: 0,
    top: "#newEntryWayInput", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(locationData);





let locationDataCollapse = new Composite({
  id: 'newEntryLocationDataCollapse',
  layoutData: {
    left: 0,
    right: 0,
    top: 'prev()', // label's bottom edge + 10px, i.e. 10px below label
  }
});

var summitLabel = new TextView({
  class: "default-text label",
  id: 'newEntrySummitLabel',
}).appendTo(locationDataCollapse);


var summitInput = new TextInput({
  class: "default-text default-border input",
  id: 'newEntrySummitInput',
}).appendTo(locationDataCollapse);
/*
var summitInput = new TextPickerInputAlone({
  id: 'newEntrySummitInput',
  class: "default-text default-border input",
  list: ['Teufelsturm','Half Dome','El Capitan','Neadel']
}).appendTo(locationDataCollapse);
*/
var areaLabel = new TextView({
  class: "default-text label",
  id: 'newEntryAreaLabel',
}).appendTo(locationDataCollapse);

var areaInput = new TextPickerInputAlone({
  class: "default-text default-border input",
  id: 'newEntryAreaInput',
}).appendTo(locationDataCollapse);

var countryLabel = new TextView({
  class: "default-text label",
  id: 'newEntryCountryLabel',
}).appendTo(locationDataCollapse);
/*
var countryInput = new TextInput({
  class: "default-text default-border input",
  id: 'newEntryCountryInput',
}).appendTo(locationDataCollapse);
*/
var countryInput = new TextPickerInputAlone({
  id: 'newEntryCountryInput',
  class: "default-text default-border input",
  list: ['Germany','USA','Vietnam','Austria']
}).appendTo(locationDataCollapse);

module.exports = {
  locationData: locationData,
  wayInput: wayInput,
  locationDataCollapseButton: locationDataCollapseButton,
  shortInfoLeftView: shortInfoLeftView,
  shortInfoRightView: shortInfoRightView,

  locationDataCollapse: locationDataCollapse,
  summitInput: summitInput,
  areaInput: areaInput,
  countryInput: countryInput,
};
