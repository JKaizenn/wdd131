// temples.js

document.addEventListener("DOMContentLoaded", function() {
    // Update copyright year
    var currentYear = new Date().getFullYear();
    var copyrightElement = document.getElementById("copyright");
    copyrightElement.textContent = currentYear;

    // Update last modified date
    var lastModifiedDate = new Date(document.lastModified);
    var lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = lastModifiedDate.toDateString();
});

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerBtn = document.getElementById("hamburger");
  var navMenu = document.getElementById("navMenu");

  if (!hamburgerBtn || !navMenu) {
    console.error("Hamburger button or navigation menu not found.");
    return;
  }

  // Function to toggle the navigation menu
  function toggleMenu() {
    navMenu.classList.toggle("show");
    var isOpen = navMenu.classList.contains("show");
    hamburgerBtn.textContent = isOpen ? "✕" : "☰";
  }

  // Event listener for hamburger button click
  hamburgerBtn.addEventListener("click", function () {
    toggleMenu();
  });

  // Close the menu when a menu item is clicked (optional)
  var menuItems = document.querySelectorAll("#navMenu ul li a");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (navMenu.classList.contains("show")) {
        toggleMenu();
      }
    });
  });
});
