//
// background color on cursor script
// a hack by @colinjohnston (neoterica@gmail.com)
//

$(document).mousemove(function(e){
// get the page width & height
var $width = ($(document).width())/255;
var $height = ($(document).height())/255;
// get x/y coords on page
var $pageX = (parseInt(e.pageX / $width,10));
var $pageY = (parseInt(e.pageY / $height,10));
var $pageXY = ($pageX+$pageY)/2;
// reduce value range
var $range = 25 //keep between 10-40 
var $Xval = Math.round((($pageX)*($range/2)/128)); 
var $Yval = Math.round((($pageY)*($range/2)/128)); 
var $XYval = ($Xval+$Yval)/2;
// set starting value
var $levels = 51

$("body").css("background-color", "rgb("+($Yval+$levels)+","+($XYval+$levels)+","+($Xval+$levels)+")");

var $bgcol = $("body").css('backgroundColor');
$('.color').html($bgcol);
$('.xval').html($Xval);
$('.yval').html($Yval);

});


//
// particle.js configs
//

particlesJS('particles-js', {
  particles: {
    color: '#777',
    color_random: false,
    shape: 'edge', // "circle", "edge" or "triangle"
    opacity: {
      opacity: 1,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: 2,
    size_random: true,
    nb: 40,
    line_linked: {
      enable_auto: true,
      //distance: 140,
      distance: 300,
      color: '#777',
      opacity: .75,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});


