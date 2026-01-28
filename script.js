// ======== NAVBAR TOGGLE FOR MOBILE ========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ======== TYPING ANIMATION ========
const textArray = ["Praveen Kumar M", "Web Developer", "Flutter Developer", "UI / UX Designer"];
const typingText = document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];

  if (!deleting && charIndex < currentText.length) {
    typingText.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (deleting && charIndex > 0) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1500);
    } else {
      deleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 300);
    }
  }
}

// ======== HIRE ME BUTTON (Opens Gmail Compose) ========
document.addEventListener("DOMContentLoaded", () => {
  // Start typing effect
  typeEffect();

  const hireMeBtn = document.querySelector('.hire-me-btn');

  if (hireMeBtn) {
    hireMeBtn.addEventListener('click', () => {
      const email = 'praveenbujji1999@gmail.com'; // 👈 your Gmail address
      const subject = encodeURIComponent('Hiring Inquiry');
      const body = encodeURIComponent('Hi Praveen,\n\nI am interested in hiring you for a project.\nPlease share more details.\n\nThank you!');
      
      // Gmail compose URL
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
      
      // Open Gmail in new tab
      window.open(gmailURL, '_blank');
    });
  }
});
