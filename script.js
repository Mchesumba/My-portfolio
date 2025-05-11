function showSection(sectionId) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');
}

function toggleMode() {
    document.body.classList.toggle('light-mode');
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill all fields.');
    }
});

// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(currentSlide);

// Keyboard navigation for navbar
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            showSection(this.getAttribute('onclick').match(/'([^']+)'/)[1]);
        }
    });
});