    // JavaScript code for the hamburger menu functionality
    document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.querySelector('.hamburger');
      const menu = document.querySelector('.menu');
      const closeBtn = document.querySelector('.close');
      const links = document.querySelectorAll('.menu nav a');
      
      // Function to open the menu
      function openMenu() {
        menu.style.display = 'block';
      }
      
      // Function to close the menu
      function closeMenu() {
        menu.style.display = 'none';
      }
      
      // Add event listener to the hamburger icon
      hamburger.addEventListener('click', openMenu);
      
      // Add event listener to the close button
      closeBtn.addEventListener('click', closeMenu);
      
      // Add event listeners to the navigation links
      links.forEach(function(link) {
        link.addEventListener('click', closeMenu);
      });
    });
