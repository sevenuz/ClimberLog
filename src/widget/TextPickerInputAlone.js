const {
  //Composite,
  ui,
  ScrollView,
  TextInput,
  TextView
} = require('tabris');
var theme = require('../theme/theme');


function calcFullLayoutProperty(element, property) {
  if (element.constructor.name == "ContentView") {
    return 0;
  }
  return Number(element[property]) + Number(calcFullLayoutProperty(element.parent(), property))
}


class TextPickerInput extends TextInput {
  constructor(opt = {}, filterList, onElementPicked) {
    super(opt);
    this.picker = new ScrollView({
      id: 'picker',
      padding: 20,
      background: '#fff',
      height: 100,
      top: 'prev()',
      left: 100
    });
    this.picker.data.list = opt.list || [];
    this.filterList = filterList || function(txt) {
      return this.picker.data.list;
    };
    this.onElementPicked = onElementPicked || function(index, txt) {};

    this.on('input', (element) => {
      this.picker.data.list = this.filterList(element.text);
      this.renderList();
    });
    this.on('focus', (e) => {
      this.showList();
    });
    this.on('accept', () => {
      this.hideList();
    });
    /*
    this.on('blur', () => {
      if (!this.picker.data.inactive) {
        this.hideList();
      }
    });

    this.picker.on('touchStart', (e) => {
      console.log('picker touchStart');
      this.data.inactive = false;
    });
    this.picker.on('touchCancel', (e) => {
      this.data.inactive = true;
    });
    this.picker.on('touchEnd', (e) => {
      this.data.inactive = true;
    });
    */
  }

  renderList() {
    if (this.picker.data.list.length == 0) {
      this.hideList();
      return;
    }
    let self = this;
    this.picker.children().dispose();
    for (var i = 0; i < this.picker.data.list.length; i++) {
      console.log(this.picker.data.list[i]);
      let tv = new TextView({
        class: "list-element",
        text: this.picker.data.list[i]
      });
      tv.data.index = i;
      /*
      tv.on('touchStart', (e) => {
        console.log('touchStart', this.data.index);
        this.data.inactive = false;
      }).on('touchCancel', (e) => {
        this.data.inactive = true;
      }).on('touchEnd', (e) => {
        this.data.inactive = true;
      });
      */
      tv.on('tap', function(e) {
        self.text = this.text;
        self.onElementPicked(this.data.index, this.text);
        self.hideList();
      }).appendTo(this.picker);
    }
    theme.setTheme('default', this.picker);
  }

  showList() {
    if (this.picker.data.list.length > 0) {
      this.renderList();

      this.picker.top = utils.calcFullTop(this) + this.data.height + 50;
      this.picker.left = utils.calcFullLeft(this);
      this.picker.width = this.data.width;

      ui.contentView.append(this.picker);
      //this.picker.insertAfter(this);
    }
  }

  hideList() {
    this.picker.detach();
  }

  set list(l) {
    if (this.picker) this.picker.data.list = l;
  }
  get list() {
    if (this.picker) return this.picker.data.list;
  }

}

module.exports = TextPickerInput;
