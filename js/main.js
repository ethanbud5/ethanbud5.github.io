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