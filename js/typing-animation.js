document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing-text');
  const text = 'Stranica je u pripremi, vratite se kasnije.';
  
  let isDeleting = false;
  let charIndex = 0;
  let typingSpeed = 100; // Speed for typing in ms
  let deletingSpeed = 50; // Speed for deleting in ms
  let pauseBeforeDelete = 2000; // Pause before starting to delete in ms
  let pauseBeforeType = 1000; // Pause before starting to type again in ms
  
  function typeWriter() {
    // Current text state
    const currentText = text.substring(0, charIndex);
    textElement.textContent = currentText;
    
    // If deleting
    if (isDeleting) {
      charIndex--;
      typingSpeed = deletingSpeed;
    } else {
      // If typing
      charIndex++;
      typingSpeed = 100;
    }
    
    // Completed typing text
    if (!isDeleting && charIndex === text.length) {
      // Pause before starting to delete
      typingSpeed = pauseBeforeDelete;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Completed deleting
      isDeleting = false;
      // Pause before starting to type again
      typingSpeed = pauseBeforeType;
    }
    
    // Continue the typing/deleting loop
    setTimeout(typeWriter, typingSpeed);
  }
  
  // Start the typing animation
  setTimeout(typeWriter, 1000);
}); 