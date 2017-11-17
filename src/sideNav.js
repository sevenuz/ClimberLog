const {
  Composite,
  ScrollView,
  ImageView,
  TextView,
  Button
} = require('tabris');
theme = require('./theme/theme');
language = require('./language/language');

var ImageTextView = require("./widget/ImageTextView");
var Divider = require("./widget/Divider");

let drawerView = new ScrollView({
  class: "main-background drawer-background",
  layoutData: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  //background: theme['drawer-background']
});

drawerView.MENU = {
  HOME: 0,
  ENTRIES: 1,
  STATS: 2,
  NEW_ENTRY: 3,
  SETTINGS: 4
};

//Listener
drawerView.onChangeMenu = function(selectedMenu = MENU.HOME, oldTarget, newTarget) {};
drawerView.changeMenu = function(selectedMenu, newTarget) {
  if (newTarget.id !== drawerView.activeTarget.id) {
    drawerView.onChangeMenu(selectedMenu, drawerView.activeTarget, newTarget);
    drawerView.activeTarget = newTarget;
  }
};

drawerView.setActiveMenu = function(m) {
  switch (m) {
    case drawerView.MENU.HOME:
      drawerView.changeMenu(drawerView.MENU.HOME, drawerHomeButton);
      break;
    case drawerView.MENU.ENTRIES:
      drawerView.changeMenu(drawerView.MENU.ENTRIES, drawerEntriesButton);
      break;
    case drawerView.MENU.STATS:
      drawerView.changeMenu(drawerView.MENU.STATS, drawerStatsButton);
      break;
    case drawerView.MENU.NEW_ENTRY:
      drawerView.changeMenu(drawerView.MENU.NEW_ENTRY, drawerNewEntryButton);
      break;
    case drawerView.MENU.SETTINGS:
      drawerView.changeMenu(drawerView.MENU.SETTINGS, drawerSettingsButton);
      break;
    default:
      drawerView.changeMenu(drawerView.MENU.HOME, drawerHomeButton);
  }
};

let drawerUserHead = new Composite({
  id: 'drawerUserHead',
  layoutData: {
    left: 0,
    top: 0,
    right: 0,
    height: 200
  }
});

let drawerUserBgImage = new ImageView({
  layoutData: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  image: 'images/mountainUserBg.jpg',
  scaleMode: 'stretch'
});

let drawerUserAvatarImage = new ImageView({
  layoutData: {
    left: 20,
    bottom: 20,
    width: 90,
    height: 90
  },
  image: 'images/userEmpty.png',
  cornerRadius: 30,
  scaleMode: 'stretch'
});

let drawerUserName = new TextView({
  class: 'default-text',
  id: 'drawerUserName',
  layoutData: {
    right: 20,
    top: 20,
  },
  alignment: "right",
});

let drawerNetworkStatus = new TextView({
  class: "red-text",
  id: 'drawerNetworkStatus',
  layoutData: {
    right: 20,
    bottom: 20,
  },
  alignment: "right",
});

drawerUserHead.append(drawerUserBgImage);
drawerUserHead.append(drawerUserAvatarImage);
drawerUserHead.append(drawerUserName);
drawerUserHead.append(drawerNetworkStatus);


let drawerMenuList = new Composite({
  layoutData: {
    left: 0,
    bottom: 0,
    right: 0,
    top: ["#drawerUserHead", 0], // label's bottom edge + 10px, i.e. 10px below label
  }
});

var MENU_TEXT_STYLE = {
  offset: 9
};

let drawerHomeButton = new ImageTextView({
  class: 'default-text',
  id: 'drawerHomeButton',
  top: 0,
  image: theme.getIcon("ic_home"),
}).on("tap", function(event) {
  drawerView.changeMenu(drawerView.MENU.HOME, this);
}).set("background", theme.get('.active-main-background', 'background')); //Ändert bg weil das vorangeklcikt ist

let drawerEntriesButton = new ImageTextView({
  class: 'default-text',
  id: 'drawerEntriesButton',
  top: ["#drawerHomeButton", MENU_TEXT_STYLE.offset],
  image: theme.getIcon("ic_assignment"),
}).on("tap", function(event) {
  drawerView.changeMenu(drawerView.MENU.ENTRIES, this);
});


let drawerStatsButton = new ImageTextView({
  class: 'default-text',
  id: 'drawerStatsButton',
  top: ["#drawerEntriesButton", MENU_TEXT_STYLE.offset],
  image: theme.getIcon("ic_timeline"),
}).on("tap", function(event) {
  drawerView.changeMenu(drawerView.MENU.STATS, this);
});


let drawerNewEntryButton = new ImageTextView({
  class: 'default-text',
  id: 'drawerNewEntryButton',
  top: ["#drawerStatsButton", MENU_TEXT_STYLE.offset],
  image: theme.getIcon("ic_add"),
}).on("tap", function(event) {
  drawerView.changeMenu(drawerView.MENU.NEW_ENTRY, this);
});

let drawerSettingsButton = new ImageTextView({
  class: 'default-text',
  id: 'drawerSettingsButton',
  bottom: 0,
  image: theme.getIcon("ic_settings"),
}).on("tap", function(event) {
  drawerView.changeMenu(drawerView.MENU.SETTINGS, this);
});

drawerMenuList.append(drawerHomeButton);
//drawerMenuList.append(new Divider("#drawerHomeButton",1));

drawerMenuList.append(drawerEntriesButton);
//drawerMenuList.append(new Divider("#drawerEntriesButton",1));

drawerMenuList.append(drawerStatsButton);
//drawerMenuList.append(new Divider("#drawerStatsButton",1));

drawerMenuList.append(drawerNewEntryButton);
//drawerMenuList.append(new Divider("#drawerNewEntryButton",1));

drawerMenuList.append(new Divider({
  bottom: ["#drawerSettingsButton", 1]
}));
drawerMenuList.append(drawerSettingsButton);

//default select
drawerView.activeTarget = drawerHomeButton;

drawerView.append(drawerUserHead);
drawerView.append(drawerMenuList);

theme.setTheme('default', drawerView);
language.setLanguage('default',drawerView);
module.exports = drawerView;
