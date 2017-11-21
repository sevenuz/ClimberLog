const {
  Composite,
  TextInput,
  TextView,
  ImageView,
  device
} = require('tabris');
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

var titleInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryTitleInput',
  layoutData: {
    left: 0,
    right: 0,
    top: 0, // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalData);

var personalDataCollapseButton = new ImageView({
  id: 'newEntryPersonalDataCollapseButton',
  scaleMode: 'fit',
  layoutData: {
    width: 40,
    height: 40,
    top: 0,
    right: 0,
  },
  image: theme.getIcon("ic_filter")
}).appendTo(personalData);




let personalDataCollapse = new Composite({
  id: 'newEntryPersonalDataCollapse',
  layoutData: {
    left: 0,
    right: 0,
    top: 'prev()',
    height: 200
  }
});

var date = new TextView({
  class: "default-text",
  id: 'newEntryDate',
  alignment: 'center',
  highlightOnTouch: true,
  text: moment().format('LL'),
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalDataCollapse);

var ropedPartyInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryRopedPartyInput',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalDataCollapse);

var ropedPartyView = new TextView({
  class: "default-text",
  id: 'newEntryRopedPartyView',
  font: 'italic 10px',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalDataCollapse);

var leadClimbingInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryLeadClimbingInput',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(personalDataCollapse);

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
  var ropedPartyView = new TextView({
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



module.exports = {
  personalData: personalData,
  personalDataCollapse: personalDataCollapse,
};
