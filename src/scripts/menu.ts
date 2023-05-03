// TypeScript code
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if ((hamburger != null) && (navLinks != null)) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("expanded");
  });
}

export {} // Bit weird that this empty export is needed?

// Javascript code
// document.querySelector('.hamburger').addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('expanded');
//   });
