const blob = document.getElementById("blob");

window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementsByClassName("hamburger")[0];
    const navbarlinks = document.getElementsByClassName("right-nav")[0];
    const navbar = document.getElementsByClassName("nav")[0];
    const mediaQuery = window.matchMedia("(max-width: 750px)");
  
    const toggleNavbar = () => {
      navbarlinks.classList.toggle("active");
  
      if (navbarlinks.classList.contains("active")) {
        navbar.style.height = "165px"; 
      } else {
        navbar.style.height = mediaQuery.matches ? "50px" : "80px"; 
      }
    };
  
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
    
        navbar.style.height = "50px"; 
        hamburger.addEventListener("click", toggleNavbar);
      } else {
        hamburger.removeEventListener("click", toggleNavbar);
        navbarlinks.classList.remove("active");
        navbar.style.height = "80px"; 
      }
    };
  
    handleMediaQueryChange(mediaQuery); 
  
    mediaQuery.addEventListener("change", handleMediaQueryChange); 
});
  

