// ==================== MENU ICON TOGGLE ====================
let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ==================== SCROLL SECTIONS ACTIVE LINK ====================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // ==================== STICKY NAVBAR ====================
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ==================== REMOVE TOGGLE ICON AND NAVBAR ====================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ==================== TYPED.JS EFFECT ====================
const typed = document.querySelector('.multiple-text');
const textArray = ['Web Developer', 'Frontend Developer', 'UI/UX Designer', 'React Developer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typed.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typed.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

// Start typing effect when page loads
type();

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.services-box, .testimonial-box, .about-content, .about-img');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.services-box, .testimonial-box, .about-content, .about-img');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
    });
});

// ==================== NAVBAR LINK CLICK HANDLER ====================
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close mobile menu when link is clicked
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});