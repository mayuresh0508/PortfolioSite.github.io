const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navbarlinks = document.querySelector(".right-nav");
  const navbar = document.querySelector(".nav");
  const mediaQuery = window.matchMedia("(max-width: 750px)");

  const toggleNavbar = () => {
    navbarlinks.classList.toggle("active");
    navbar.style.height = navbarlinks.classList.contains("active") ? "165px" : (mediaQuery.matches ? "50px" : "80px");
  };

  const handleMediaQueryChange = (event) => {
    if (event.matches) {
      navbar.style.height = "50px";
      hamburger.addEventListener("click", toggleNavbar);
    } else {
      navbar.style.height = "80px";
      hamburger.removeEventListener("click", toggleNavbar);
      navbarlinks.classList.remove("active");
    }
  };

  handleMediaQueryChange(mediaQuery);
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  Array.from(navbarlinks.getElementsByTagName("a")).forEach((item) => {
    item.addEventListener("click", () => {
      if (mediaQuery.matches) {
        navbarlinks.classList.remove("active");
        navbar.style.height = "50px";
      } else {
        navbar.style.height = "80px";
      }
    });
  });
});



