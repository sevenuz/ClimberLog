const {
  Action,
  NavigationView,
  Page,
  TextInput,
  TextView,
  Button
} = require('tabris');
theme = require('./theme/theme');
language = require('./language/language');


var db = require("./res/db");


let navigationViewLogin = new NavigationView({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  drawerActionVisible: true
});

let loginPage = new Page({
  class: "main-background",
  id:'loginPage',
}).appendTo(navigationViewLogin);

var email = new TextInput({
  class: "default-text",
  id: 'loginEmailInput',
  layoutData: {
    centerX: 0,
    centerY: -50,
    width: 150
  },
}).appendTo(loginPage);

var password = new TextInput({
  class: "default-text",
  id: 'loginPasswordInput',
  layoutData: {
    centerX: 0,
    width: 150,
    top: ["#loginEmailInput", 10], // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(loginPage);

loginButton = new Button({
  layoutData: {
    centerX: 0,
    width: 150,
    top: ["#loginPasswordInput", 10], // label's bottom edge + 10px, i.e. 10px below label
  },
  text: 'Login'
}).on('select', (function(target) {
  console.log("click login", email.text, password.text);
  fetch("http://abi.sevenus.adhara.uberspace.de/login/json", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.text,
        pw1: password.text,
      })
    })
    .then(function(res) {
      return res.json();
    }).then(function(d) {
      if (d.login) {
        console.log(d.user);
        nameText.text = d.user.vorname + " ist ne Memme. Willkommen.";
        welcomePage.appendTo(navigationViewLogin);
        db.Users.insert(d.user, function(err, newDoc) {
          console.log("User jetzt in der DB: ", newDoc);
        });
      } else {
        db.Users.find({
          vorname: /sca/
        }, function(err, docs) {
          console.log("gefunden: ", docs);
        });
      }
    }).catch(function(error) {
      console.log(error);
    });
})).appendTo(loginPage);


let welcomePage = new Page({
  class: "main-background",
  title: 'Welcome',
});

let nameText = new TextView({
  class: 'default-text',
  layoutData: {
    centerX: 0,
    centerY: -50,
    width: 150
  },
  text: 'Left',
  alignment: 'center'
}).appendTo(welcomePage);



new Action({
  title: 'Search',
  placementPriority: "low"
}).appendTo(navigationViewLogin);
new Action({
  title: 'Share',
  image: {
    src: theme.getIcon("ic_share"),
    scale: 3
  }
}).appendTo(navigationViewLogin);

theme.setTheme('default', navigationViewLogin);
language.setLanguage('default',navigationViewLogin);
module.exports = navigationViewLogin;
