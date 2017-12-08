const {
  Composite,
  ScrollView,
  TextInput,
  TextView
} = require('tabris');


class TextPickerInput extends Composite {
  constructor(opt = {}, filterList, onElementPicked) {
    super(opt.Composite);
    this.txt = new TextInput(opt.TextInput);
    let svOpt = {
      padding: 20,
      background: '#fff',
      layoutData: {
        height: 150,
        top: 40,
        left: 0
      }
    };
    Object.assign(svOpt,opt.ScrollView);
    this.picker = new ScrollView(svOpt);

    this.picker.data.list= opt.list || [];
    this.filterList = filterList || function(txt){
      return this.picker.data.list;
    };
    this.onElementPicked = onElementPicked || function(index, txt){};

    this.on('resize', (element) => {
      this.picker.width = element.width;
    });
    this.txt.on('input', (element) => {
      this.picker.data.list = this.filterList(element.text);
      this.renderList();
    });
    this.txt.on('focus', (e) => {
      this.showList();
    });
    this.txt.on('blur', (element) => {
      //this.hideList();
    });

    this.append(this.txt);
  }

  renderList() {
    let self = this;
    this.picker.children().dispose();
    for (var i = 0; i < this.picker.data.list.length; i++) {
      console.log(i);
      let tv = new TextView({
        class: "list-element",
        text: this.picker.data.list[i]
      });
      tv.data.index = i;
      tv.on('tap', function(e) {
        self.txt.text = this.text;
        self.onElementPicked(this.data.index, this.text);
        self.hideList();
      }).appendTo(this.picker);
    }
    theme.setTheme('default', this.picker);
  }

  showList() {
    this.renderList();
    this.append(this.picker);
  }

  hideList() {
    this.picker.detach();
  }

  set text(txt) {
    if (this.txt) this.txt.text = txt;
  }
  set textColor(txtclr) {
    if (this.txt) this.txt.textColor = txtclr;
  }
  set selectable(val) {
    if (this.txt) this.txt.selectable = val;
  }
  set maxLines(val) {
    if (this.txt) this.txt.maxLines = val;
  }
  set markupEnabled(val) {
    if (this.txt) this.txt.markupEnabled = val;
  }
  set lineSpacing(val) {
    if (this.txt) this.txt.lineSpacing = val;
  }
  set alignment(val) {
    if (this.txt) this.txt.alignment = val;
  }

  set list(l) {
    if (this.picker) this.picker.data.list = l;
  }
  get list() {
    if (this.picker) return this.picker.data.list;
  }

}

module.exports = TextPickerInput;
