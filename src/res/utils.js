function calcInlineTranlation(length, scale) {
  return (length - (length * scale)) / 2;
}

function calcFullTop(element) {
  if (element.constructor.name == "ContentView") {
    return 0;
  }
  return element.data.top + calcFullTop(element.parent());
}
function calcFullLeft(element) {
  if (element.constructor.name == "ContentView") {
    return 0;
  }
  return element.data.left + calcFullLeft(element.parent());
}

function setPropertiesOnResize(e) {
  e.target.data.left = e.left;
  e.target.data.width = e.width;
  e.target.data.top = e.top;
  e.target.data.height = e.height;
}

/**Sehr dolle FEHLERHAFT*/
function animate(element, property, value, duration, index = 0) {
  let fps = 50;
  let tick = (value - element[property])/((duration/1000) * fps);//TODO FHELER
  element[property] += tick;
  setTimeout(function () {
    console.log('animate',element[property], value);
    if (element[property] !== value) {
      animate(element, property, value, duration, index++);
    }
  },1000/fps);
}

function toggleCollapse(clpButton, clpComposite, opt) {
  var options = {
    duration: 500,
    scaleY: 0.1
  };
  Object.assign(options, opt);
  if (typeof clpComposite.collapsed === "undefined") {
    console.log("undefined?", clpComposite.opacity);
    clpComposite.collapsed = (clpComposite.opacity === 0) ? true : false;
  }
  if (clpComposite.collapsed) {
    clpComposite.collapsed = false;
    clpComposite.height = clpComposite.data.realH;
    //animate(clpComposite,'height',clpComposite.data.realH,options.duration);
    clpComposite.animate({
      opacity: 1,
      transform: {
        translationY: 0,
        scaleY: 1
      }
    }, {
      duration: options.duration,
      easing: 'ease-out'
    }).then(function() {});

    if (clpButton) {
      clpButton.animate({
        transform: {
          rotation: 0,
        }
      }, {
        duration: options.duration,
        easing: 'ease-out'
      }).then(function() {});
    }

    return clpComposite.collapsed;
  } else {
    clpComposite.collapsed = true;
    //animate(clpComposite,'height',0,options.duration);
    clpComposite.animate({
      opacity: 0,
      transform: {
        translationY: -calcInlineTranlation(clpComposite.data.height, options.scaleY),
        scaleY: options.scaleY
      }
    }, {
      duration: options.duration,
      easing: 'ease-out'
    }).then(function() {
      clpComposite.data.realH = clpComposite.height;
      clpComposite.height = 0;
    });

    if (clpButton) {
      clpButton.animate({
        transform: {
          rotation: Math.PI * 0.5,
        }
      }, {
        duration: options.duration,
        easing: 'ease-out'
      }).then(function() {});
    }

    return clpComposite.collapsed;
  }
}
module.exports.calcInlineTranlation = calcInlineTranlation;
module.exports.toggleCollapse = toggleCollapse;
module.exports.calcFullTop = calcFullTop;
module.exports.setPropertiesOnResize = setPropertiesOnResize;
module.exports.calcFullLeft = calcFullLeft;
