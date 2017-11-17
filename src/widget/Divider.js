const {
  Composite
} = require('tabris');

class Divider extends Composite {
  constructor(aid, aoffset = 0) {
    if (typeof aid === "string") {
      super({
        layoutData: {
          left: 10,
          top: [aid, aoffset],
          right: 10,
          height: 1
        },
        background: "white"
      });
    } else {
      super({
        layoutData: {
          left: aid.left || 10,
          top: aid.top,
          bottom: aid.bottom,
          right: aid.right || 10,
          height: aid.height || 1
        },
        background: aid.background || "white"
      });
    }
  }
}

module.exports = Divider;
