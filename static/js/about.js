$(document).ready(function() {
   $('ul#myRoundabout').roundabout({
     shape:"lazySusan",
     childSelector: 'div.moveable',
     autoplay: true,
     autoplayInitialDelay:1000,
     autoplayDuration: 3000,
    autoplayPauseOnHover: true
   });
});
