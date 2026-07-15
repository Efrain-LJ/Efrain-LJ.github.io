{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Navegaci\'f3n suave\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
            behavior: 'smooth'\
        \});\
    \});\
\});\
\
// Navbar scroll effect\
window.addEventListener('scroll', () => \{\
    const navbar = document.querySelector('.navbar');\
    if (window.scrollY > 50) \{\
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';\
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';\
    \} else \{\
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';\
        navbar.style.boxShadow = 'none';\
    \}\
\});\
\
// Animaci\'f3n de entrada\
const observerOptions = \{\
    threshold: 0.1,\
    rootMargin: '0px 0px -50px 0px'\
\};\
\
const observer = new IntersectionObserver((entries) => \{\
    entries.forEach(entry => \{\
        if (entry.isIntersecting) \{\
            entry.target.style.opacity = '1';\
            entry.target.style.transform = 'translateY(0)';\
        \}\
    \});\
\}, observerOptions);\
\
document.querySelectorAll('.timeline-item, .project-card, .stat').forEach(el => \{\
    el.style.opacity = '0';\
    el.style.transform = 'translateY(30px)';\
    el.style.transition = 'all 0.6s ease';\
    observer.observe(el);\
\});\
\
// Formulario (simulado)\
document.querySelector('.contact-form').addEventListener('submit', (e) => \{\
    e.preventDefault();\
    alert('\'a1Gracias por tu mensaje! Te contactar\'e9 pronto.');\
    e.target.reset();\
\});}