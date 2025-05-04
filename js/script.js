// Scrollspy Activation
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar',
  offset: 70
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// home type
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector('.typed');
  if (typedElement) {
    const typedItems = typedElement.getAttribute('data-typed-items');
    const items = typedItems.split(',').map(item => item.trim());

    new Typed('.typed', {
      strings: items,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }
});

// Light/Dark Mode
const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  const iconClass = isDark ? 'bi bi-sun' : 'bi bi-moon';
  const labelText = isDark ? 'Light Mode' : 'Dark Mode';

  toggleButton.innerHTML = `<i class="${iconClass}"></i> ${labelText}`;
});



// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let isValid = true;

  // Validate name
  if (!name.value.trim()) {
    name.classList.add('is-invalid');
    isValid = false;
  } else {
    name.classList.remove('is-invalid');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    email.classList.add('is-invalid');
    isValid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Validate message
  if (!message.value.trim()) {
    message.classList.add('is-invalid');
    isValid = false;
  } else {
    message.classList.remove('is-invalid');
  }

  if (isValid) {
    alert("Message sent successfully!");
    this.reset(); // clear the form
    name.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    message.classList.remove('is-invalid');
  }
});

// AOS Animations
AOS.init();

function toggleProject(id) {
    const el = document.getElementById(id);
    el.classList.toggle("d-none");
  }

  function toggleIframe(id) {
    const iframe = document.getElementById(id);
    iframe.classList.toggle('d-none');
  }

  function openModal(url) {
    const iframe = document.getElementById('modalIframe');
    iframe.src = url;
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
  }
