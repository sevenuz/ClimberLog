const {
  ui,
  Composite
} = require('tabris');
theme = require('./theme/theme');
//language = require('./language/language');

sideNav = require('./sideNav');
newEntryView = require('./newEntry');
loginView = require('./loginView');

var contentWrapper = new Composite({
  layoutData: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0
  }
});

sideNav.onChangeMenu = function (selectedMenu, oldTarget, newTarget) {
  oldTarget.set("background","transparent");
  newTarget.set("background",theme.get('.active-main-background','background'));
  if(selectedMenu == sideNav.MENU.NEW_ENTRY){
    contentWrapper.append(newEntryView);
    ui.drawer.close();
  }
}
ui.drawer.enabled = true;
ui.drawer.append(sideNav);

console.log("gogogo");
contentWrapper.append(loginView);

ui.contentView.append(contentWrapper);

//theme.setTheme('default',[loginView,sideNav,newEntryView]);
//language.setLanguage('en',[loginView,sideNav,newEntryView]);
