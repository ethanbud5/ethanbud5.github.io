function scrollClick(id){
    document
    .getElementById(id)
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
}
function toggleNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav_container") {
      x.className += " nav_container_open";
    } else {
      x.className = "nav_container";
    }
  }

window.onscroll = function() {
    const anchorsArray = ["#home","#about","#skills","#projects","#contact"]
    const noHashID = ["homeID","aboutID","skillsID","projectsID","contactID"]
    const scrollPosition = window.pageYOffset
    // Anchor highlighting: (Credits to Nick Salloum, recoded to vanilla JavaScript from http://callmenick.com/post/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation)
    for(i = 0; i < anchorsArray.length; i++) {
      // Loop over anchor's href tags and set classes
      var theID     = anchorsArray[i], // e.g. '#about'
          ID        = noHashID[i]
          divTop    = document.querySelector(theID).offsetTop, // e.g. ('#about').offsetTop -> 2200 (px)
          divHeight = document.querySelector(theID).offsetHeight // e.g. ('#about').offsetHeight -> 600 (px)

      if (scrollPosition >= divTop && scrollPosition < (divTop + divHeight)) {
        // only if the viewport is scrolled beyond the div's top border and still before the div's bottom border
        document.getElementById(ID).classList.add('active')
    } else {
        document.getElementById(ID).classList.remove('active')
      }
    }
  }