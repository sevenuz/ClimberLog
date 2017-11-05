const {
  Action,
  NavigationView,
  Page,
  TextInput,
  Button
} = require('tabris');

let navigationViewLogin = new NavigationView({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  drawerActionVisible: true
});

let page = new Page({
  title: 'Login',
  background: '#4286f4'
}).appendTo(navigationViewLogin);

var email = new TextInput({
  id: 'loginInputEmail',
  layoutData: {
    centerX: 0,
    centerY: -50,
    width: 150
  },
  message: 'Email'
}).appendTo(page);

var password = new TextInput({
  message: 'Password',
  id: 'loginInputPassword',
  layoutData: {
    centerX: 0,
    width: 150,
    top: ["#loginInputEmail", 10], // label's bottom edge + 10px, i.e. 10px below label
  }
}).appendTo(page);

loginButton = new Button({
  layoutData: {
    centerX: 0,
    width: 150,
    top: ["#loginInputPassword", 10], // label's bottom edge + 10px, i.e. 10px below label
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
      console.log(d.login, d.msg, d.user);
    }).catch(function(error) {
      console.log(error);
    });
})).appendTo(page);

new Action({
  title: 'Search'
}).appendTo(navigationViewLogin);
new Action({
  title: 'Share',
  image: {
    src: 'images/ico-red.ico',
    scale: 3
  }
}).appendTo(navigationViewLogin);

module.exports = navigationViewLogin;
