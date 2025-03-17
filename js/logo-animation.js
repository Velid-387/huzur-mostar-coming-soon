document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  const overlay = document.querySelector('.logo-overlay');
  
  // Function to toggle enlarged state
  function toggleLogoEnlarge() {
    // Only apply for mobile devices
    if (window.innerWidth <= 768) {
      logo.classList.toggle('enlarged');
      overlay.classList.toggle('active');
    }
  }
  
  // Add click event to logo
  logo.addEventListener('click', toggleLogoEnlarge);
  
  // Close enlarged logo when clicking on the overlay
  overlay.addEventListener('click', function() {
    logo.classList.remove('enlarged');
    overlay.classList.remove('active');
  });
  
  // Close enlarged logo when pressing ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && logo.classList.contains('enlarged')) {
      logo.classList.remove('enlarged');
      overlay.classList.remove('active');
    }
  });
}); 