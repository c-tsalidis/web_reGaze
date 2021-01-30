// init
var controller = new ScrollMagic.Controller();

/*
// define movement of panels
var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

// create scene to pin and link animation
new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
*/

// build scenes
var revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
                        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                        offset: 50,												 // start a little later
                        triggerHook: 0.9,
                    })
                    .setClassToggle(revealElements[i], "visible") // add class toggle
                    .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                    .addTo(controller);
}