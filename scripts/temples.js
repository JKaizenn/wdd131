// temples.js

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
