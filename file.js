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



emailjs.init("871V-lcACOT5UneYq");

document.getElementById("sendButton").addEventListener("click", function () {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userText = document.getElementById("userText").value;

  // Replace "your_email_service_id" with the actual ID of your EmailJS service
  const emailServiceID = "service_8mm0238";

  // Replace "your_email_template_id" with the actual ID of your EmailJS template
  const emailTemplateID = "template_uq11xbc";

  // Parameters to populate the template content
  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    user_text: userText
  };

  // Send the email using EmailJS
  emailjs.send(emailServiceID, emailTemplateID, templateParams)
    .then(function (response) {
      alert("Thanks for Contacting... I will reach to you soon :)");
    }, function (error) {
      alert("Unable to send the Message");
    });
});



