const {
  Composite,
  TextInput,
  TextView,
  ImageView,
  device
} = require('tabris');
//var TextPickerInput = require("../../widget/TextPickerInput");
theme = require('../../theme/theme');
//language = require('../../language/language');




let personalData = new Composite({
  id: 'newEntryPersonalData',
  layoutData: {
    left: 0,
    right: 0,
    top: 0,
    //height: 40
  }
});

var personalDataCollapseButton = new ImageView({
  id: 'newEntryPersonalDataCollapseButton',
  scaleMode: 'fit',
  layoutData: {
    width: 40,
    height: 40,
    top: 0,
    right: 0,
  },
  image: theme.getIcon("ic_expand")
}).appendTo(personalData);

var titleInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryTitleInput',
  layoutData: {
    left: 0,
    right: 50,
    top: 0, // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalData);

var shortInfoRightView = new TextView({
  class: "default-text",
  id: 'newEntryShortPersonalInfoRightView',
  alignment: 'right',
  opacity: 0,
  layoutData: {
    left: 0,
    right: 0,
    top: "#newEntryTitleInput", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalData);

var shortInfoLeftView = new TextView({
  class: "default-text",
  id: 'newEntryShortPersonalInfoLeftView',
  alignment: 'left',
  opacity: 0,
  layoutData: {
    left: 0,
    right: 0,
    top: "#newEntryTitleInput", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalData);




let personalDataCollapse = new Composite({
  id: 'newEntryPersonalDataCollapse',
  layoutData: {
    left: 0,
    right: 0,
    top: 'prev()',
    //height: 200
  }
});

var dateLabel = new TextView({
  class: "default-text label",
  id: 'newEntryDateLabel',
}).appendTo(personalDataCollapse);

var date = new TextView({
  class: "default-text input",
  id: 'newEntryDate',
}).appendTo(personalDataCollapse);

var ropedPartyLabel = new TextView({
  class: "default-text label",
  id: 'newEntryRopedPartyLabel',
}).appendTo(personalDataCollapse);

var ropedPartyInput = new TextInput({
  class: "default-text default-border input",
  id: 'newEntryRopedPartyInput',
}).appendTo(personalDataCollapse);

var ropedPartyView = new TextView({
  class: "default-text hint",
  id: 'newEntryRopedPartyView',
}).appendTo(personalDataCollapse);

var leadClimbingLabel = new TextView({
  class: "default-text label",
  id: 'newEntryLeadClimbingLabel',
}).appendTo(personalDataCollapse);

var leadClimbingInput = new TextInput({
  class: "default-text default-border input",
  id: 'newEntryLeadClimbingInput',
}).appendTo(personalDataCollapse);

/*
var leadClimbingInput = new TextPickerInput({
  Composite: {
    id: 'newEntryLeadClimbingInput',
    "left": ["prev()", 0],
    "right": 0,
    "top": ['prev()',10]
  },
  TextInput: {
    class: "default-text default-border",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  list: ['Robert', 'Julius']
}).appendTo(personalDataCollapse);
console.log("hier123145");
*/
/*
//Kommentar disabled
var remarkInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryRemarkInput',
  type: 'multiline',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalDataCollapse);

//Fallback, weil iOS bei Multiline keine message zeigt
if (device.platform == "iOS") {
  var remarkIosView = new TextView({
    class: "default-text",
    id: 'newEntryRemarkIosView',
    font: 'italic 10px',
    layoutData: {
      left: 0,
      right: 0,
      top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
    }
  }).appendTo(personalDataCollapse);
}
*/


module.exports = {
  personalData: personalData,
  titleInput: titleInput,
  personalDataCollapseButton: personalDataCollapseButton,
  shortInfoLeftView: shortInfoLeftView,
  shortInfoRightView: shortInfoRightView,

  personalDataCollapse: personalDataCollapse,
  date: date,
  ropedPartyInput: ropedPartyInput,
  ropedPartyView: ropedPartyView,
  leadClimbingInput: leadClimbingInput,
  //remarkInput: remarkInput,
  //remarkIosView: remarkIosView
};
