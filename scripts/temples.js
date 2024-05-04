// temples.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the current year and update the footer
  var currentYear = new Date().getFullYear();
  document.getElementById("copyright").textContent = currentYear;

  // Get the last modified date of the document and update the footer
  var lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;

  // Toggle navigation menu on mobile view
  var hamburger = document.querySelector(".hamburger");
  var nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});
