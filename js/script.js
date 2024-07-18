// Toggle Class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar untk menghilangkan navnya
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// remove br on size
// function removeBrOnResize() {
//   const mediaQuery = window.matchMedia("(max-width: 768px)");
//   const aboutUsPara = document.querySelector(".aboutUs-para p");

//   function handleScreenResize(e) {
//     if (e.matches) {
//       // Remove all <br> elements when screen width is <= 768px
//       const brElements = aboutUsPara.querySelectorAll("br");
//       brElements.forEach((br) => br.remove());
//     }
//   }

//   // Add listener for media query changes
//   mediaQuery.addListener(handleScreenResize);

//   // Initial check
//   handleScreenResize(mediaQuery);
// }

// // Run the function on page load
// document.addEventListener("DOMContentLoaded", removeBrOnResize);
