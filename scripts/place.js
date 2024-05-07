document.addEventListener("DOMContentLoaded", function () {
  // Get the current year and update the footer
var currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = currentYear;
  // Get the last modified date of the document and update the footer
var lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

});