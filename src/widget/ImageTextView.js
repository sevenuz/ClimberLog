const {
  Composite,
  ImageView,
  TextView
} = require('tabris');

function defaultOptAll(opt) {
  opt.highlightOnTouch = opt.highlightOnTouch || true;
  opt.background = opt.background || 'transparent';
  return opt;
}

function defaultOpt(opt) {
  opt = defaultOptAll(opt);
  opt.height = opt.height || 40;
  opt.left = opt.left || 0;
  opt.right = opt.right || 0;
  return opt;
}

function defaultImgOpt(opt) {
  opt = defaultOptAll(opt);
  opt.top = opt.top || 0;
  opt.bottom = opt.bottom || 0;
  opt.width = opt.width || 75;
  opt.left = opt.left || 0;
  opt.scaleMode = opt.scaleMode || 'fit';
  return opt;
}

function defaultTxtOpt(opt) {
  opt = defaultOptAll(opt);
  opt.class = opt.class || "default-text";
  opt.alignment = opt.alignment || 'left';
  opt.font = opt.font || 'normal 19px';
  opt.textColor = opt.textColor || 'white';
  opt.top = opt.top || 0;
  opt.bottom = opt.bottom || 0;
  opt.left = opt.left || 75;
  opt.right = opt.right || 0;
  return opt;
}

class ImageTextView extends Composite {
  constructor(opt = {}, imgopt = {}, txtopt = {}) {
    if (typeof opt.text === "string") {
      txtopt.text = opt.text;
      delete opt.text;
    }
    if (typeof opt.image === "string") {
      imgopt.image = opt.image;
      delete opt.image;
    }
    super(defaultOpt(opt));

    this.img = new ImageView(defaultImgOpt(imgopt)).on("tap", function(event) {
      this.trigger("tap", event);
    }, this);
    this.txt = new TextView(defaultTxtOpt(txtopt)).on("tap", function(event) {
      this.trigger("tap", event);
    }, this);

    this.append(this.img);
    this.append(this.txt);
  }
  /*
  set background(bg) {
    if (this.img) this.img.background = bg;
    if (this.txt) this.txt.background = bg;
  }
  */
  
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

  set image(img) {
    if (this.img) this.img.image = img;
  }
  set scaleMode(sm) {
    if (this.img) this.img.scaleMode = sm;
  }
  set tintColor(tc) {
    if (this.img) this.img.tintColor = tc;
  }
}

module.exports = ImageTextView;
