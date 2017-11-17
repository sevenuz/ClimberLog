const {
  Composite
} = require('tabris');

function dividerComposit(aid, aoffset = 0) {
  if (typeof aid === "string") {
    return new Composite({
      layoutData: {
        left: 10,
        top: [aid, aoffset],
        right: 10,
        height: 1
      },
      background: "white"
    });
  }else {
    return new Composite({
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
module.exports.dividerComposit = dividerComposit;
