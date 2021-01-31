
/*
// init
var controller = new ScrollMagic.Controller();


// build tween
var tween = TweenMax.fromTo("#animate1", 1,
    { left: -500 },
    { left: 500, repeat: -1, yoyo: true, ease: Circ.easeInOut }
);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 200, offset: -50 })
    .setTween(tween)
    .addIndicators({ name: "loop" }) // add indicators (requires plugin)
    .addTo(controller);

*/

var rellax = new Rellax('.rellax');