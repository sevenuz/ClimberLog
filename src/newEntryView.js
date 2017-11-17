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
anime = require('./res/anime');
theme = require('./theme/theme');
language = require('./language/language');

let newEntryView = new NavigationView({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  drawerActionVisible: true
});

new Action({
  image: {
    src: theme.getIcon("ic_done"),
    scale: 3
  },
  placementPriority: 'high'
}).on('select', function() {
  console.log("new Entry saved");
}).appendTo(newEntryView);

let newEntryPage = new Page({
  class: 'main-background newEntry-backgound',
  id: 'newEntryPage',
  autoDispose: false,
  padding: 20
}).appendTo(newEntryView);

let newEntryPersonalData = new Composite({
  layoutData: {
    left: 0,
    right: 0,
    top: 0,
    //height: 40
  }
}).appendTo(newEntryPage);

let newEntryLocationData = new Composite({
  layoutData: {
    left: 0,
    right: 0,
    top: 'prev()', // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(newEntryPage);

var newEntryTitleInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryTitleInput',
  layoutData: {
    left: 0,
    right: 0,
    top: 0, // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(newEntryPersonalData);

var newEntryRopedPartyInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryRopedPartyInput',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).on("accept", function(e) {
  console.log(e.text.split(/,\s*/));
  newEntryLeadClimbingInput.text = e.text.split(/,\s*/)[0];
}).appendTo(newEntryPersonalData);

var newEntryRopedPartyView = new TextView({
  class: "default-text",
  id: 'newEntryRopedPartyView',
  font: 'italic 10px',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(newEntryPersonalData);

var newEntryLeadClimbingInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryLeadClimbingInput',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(newEntryPersonalData);

var newEntryRemarkInput = new TextInput({
  class: "default-text default-border",
  id: 'newEntryRemarkInput',
  type: 'multiline',
  layoutData: {
    left: 0,
    right: 0,
    top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(newEntryPersonalData);

//Fallback, weil iOS bei Multiline keine message zeigt
if (device.platform == "iOS") {
  var newEntryRopedPartyView = new TextView({
    class: "default-text",
    id: 'newEntryRemarkIosView',
    font: 'italic 10px',
    layoutData: {
      left: 0,
      right: 0,
      top: "prev()", // label's bottom edge + 10px, i.e. 10px below label
    }
  }).appendTo(newEntryPersonalData);
}

var expanded = true;
newEntryView.tY1 = 100;
newEntryView.tY2 = 0;

var newEntryRemarkInput = new ImageView({
  scaleMode: 'fit',
  layoutData: {
    width: 40,
    height: 40,
    top: 0,
    right: 0,
  },
  image: theme.getIcon("ic_filter")
}).on("tap", function(e) {
  /*
  anime({
    targets: newEntryPersonalData,
    height: 40,
    duration: 800,
  });
  */
  if (expanded) {
    console.log("collapse");
    newEntryPersonalData.animate({
      opacity: 0.3,
      transform: {
        translationY: -newEntryView.tY1,
        scaleY: 0.25
      }
    }, {
      duration: 800,
      easing: 'ease-out'
    }).then(function() {
      newEntryPersonalData.transform = {
        translationY: newEntryView.tY2,
        scaleY: 1
      };
      newEntryPersonalData.opacity = 1;
      newEntryPersonalData.height = 40;
      expanded = false;
    });
  } else {
    console.log("expand");
    newEntryPersonalData.height = null;
    newEntryPersonalData.transform = {
      translationY: -newEntryView.tY1,
      scaleY: 0.25
    };
    newEntryPersonalData.animate({
      opacity: 1,
      transform: {
        translationY: newEntryView.tY2,
        scaleY: 1
      }
    }, {
      duration: 800,
      easing: 'ease-out'
    }).then(function() {
      expanded = true;
    });
  }
}).appendTo(newEntryPersonalData);




theme.setTheme('default', newEntryView);
language.setLanguage('default', newEntryView);
module.exports = newEntryView;
