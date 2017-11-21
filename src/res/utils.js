function calcInlineTranlation(length,scale){
  return (length - (length * scale)) / 2;
}

function toggleCollapse(clpButton, clpComposite, opt) {
  var options = {
    duration: 500,
    scaleY: 0.1
  };
  Object.assign(options,opt);
  if(clpComposite.collapsed){
    clpComposite.collapsed = false;
    clpComposite.animate({
      opacity: 1,
      transform: {
        translationY: 0,
        scaleY: 1
      }
    }, {
      duration: options.duration,
      easing: 'ease-out'
    }).then(function(){});

    clpButton.animate({
      transform: {
        rotation: 0,
      }
    }, {
      duration: options.duration,
      easing: 'ease-out'
    }).then(function(){});
  }else{
    clpComposite.collapsed = true;
    clpComposite.animate({
      opacity: 0,
      transform: {
        translationY: -calcInlineTranlation(clpComposite.height,options.scaleY),
        scaleY: options.scaleY
      }
    }, {
      duration: options.duration,
      easing: 'ease-out'
    }).then(function(){});

    clpButton.animate({
      transform: {
        rotation: Math.PI * 0.5,
      }
    }, {
      duration: options.duration,
      easing: 'ease-out'
    }).then(function(){});
  }
}
module.exports.calcInlineTranlation = calcInlineTranlation;
module.exports.toggleCollapse = toggleCollapse;
