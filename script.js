// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth scroll helper from Hero Mockup button
function scrollToDemo() {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
}

// Auto-select pricing plan in the Demo form
function selectPlan(planName) {
  const planSelect = document.getElementById('planSelect');
  planSelect.value = planName;
}

// Form Validation & Submission Feedback
const demoForm = document.getElementById('demoForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const successBanner = document.getElementById('successBanner');

demoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  successBanner.style.display = 'none';

  // Validate Name
  const nameVal = fullNameInput.value.trim();
  if (nameVal.length < 2) {
    nameError.textContent = 'Please enter your full name (at least 2 characters).';
    isValid = false;
  }

  // Validate Email
  const emailVal = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailVal)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Show Success Message
  if (isValid) {
    const selectedPlan = document.getElementById('planSelect').value;
    successBanner.textContent = `🎉 Thank you, ${nameVal}! Your demo request for the ${selectedPlan} has been received.`;
    successBanner.style.display = 'block';
    demoForm.reset();
  }
});