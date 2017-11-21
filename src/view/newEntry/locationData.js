const {
  Composite,
} = require('tabris');
theme = require('../../theme/theme');
//language = require('../../language/language');


let locationData = new Composite({
  id: 'newEntryLocationData',
  layoutData: {
    left: 0,
    right: 0,
    top: 'prev()', // label's bottom edge + 10px, i.e. 10px below label
  }
});

let locationDataCollapse = new Composite({
  id: 'newEntryLocationDataCollapse',
  layoutData: {
    left: 0,
    right: 0,
    top: 'prev()', // label's bottom edge + 10px, i.e. 10px below label
  }
});

module.exports = {
  locationData: locationData,
  locationDataCollapse: locationDataCollapse,
};
