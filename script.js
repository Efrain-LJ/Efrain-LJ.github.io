/* Variables */
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #16213e;
    --accent-color: #0f3460;
    --highlight-color: #e94560;
    --text-light: #f5f5f5;
    --text-gray: #b8b8b8;
    --transition: all 0.3s ease;
}

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--primary-color);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Utilidades */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navegación */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 20px 0;
    transition: var(--transition);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-light);
    text-decoration: none;
    letter-spacing: 2px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-links a {
    color: var(--text-gray);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-links a:hover {
    color: var(--highlight-color);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--highlight-color);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 80px;
}

.hero-content {
    text-align: center;
    max-width: 800px;
}

.hero-subtitle {
    color: var(--highlight-color);
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 30px;
}

.hero-title .highlight {
    color: var(--highlight-color);
}

.hero-description {
    font-size: 1.2rem;
    color: var(--text-gray);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 50px;
}

.btn {
    padding: 15px 40px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    display: inline-block;
}

.btn-primary {
    background: var(--highlight-color);
    color: var(--text-light);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
}

.btn-secondary {
    border: 2px solid var(--text-light);
    color: var(--text-light);
}

.btn-secondary:hover {
    background: var(--text-light);
    color: var(--primary-color);
}

.hero-social {
    display: flex;
    gap: 30px;
    justify-content: center;
}

.hero-social a {
    color: var(--text-gray);
    font-size: 1.5rem;
    transition: var(--transition);
}

.hero-social a:hover {
    color: var(--highlight-color);
    transform: translateY(-5px);
}

.hero-scroll {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.hero-scroll a {
    color: var(--text-gray);
    font-size: 1.5rem;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* Secciones generales */
section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.line {
    width: 60px;
    height: 4px;
    background: var(--highlight-color);
    margin: 0 auto;
}

/* About Section */
.about {
    background: var(--secondary-color);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text p {
    margin-bottom: 20px;
    color: var(--text-gray);
    font-size: 1.1rem;
}

.about-stats {
    display: flex;
    gap: 40px;
    margin-top: 40px;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--highlight-color);
}

.stat-label {
    color: var(--text-gray);
    font-size: 0.9rem;
}

.about-skills h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-tag {
    background: rgba(233, 69, 96, 0.1);
    color: var(--highlight-color);
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 0.9rem;
    border: 1px solid var(--highlight-color);
}

/* Experience Section */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--accent-color);
}

.timeline-item {
    margin-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding-right: 50%;
}

.timeline-item:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
}

.timeline-date {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--highlight-color);
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
}

.timeline-content {
    background: var(--secondary-color);
    padding: 30px;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 30px;
}

.timeline-content h3 {
    color: var(--highlight-color);
    margin-bottom: 5px;
}

.timeline-content h4 {
    color: var(--text-gray);
    font-weight: 400;
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.timeline-content p {
    color: var(--text-gray);
    font-size: 0.95rem;
}

/* Projects Section */
.projects {
    background: var(--secondary-color);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--primary-color);
    border-radius: 15px;
    overflow: hidden;
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
    height: 200px;
    background: linear-gradient(135deg, var(--accent-color), var(--highlight-color));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: var(--text-light);
}

.project-content {
    padding: 30px;
}

.project-content h3 {
    margin-bottom: 10px;
}

.project-content p {
    color: var(--text-gray);
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.project-tags span {
    background: var(--accent-color);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--text-light);
}

.project-link {
    color: var(--highlight-color);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
}

.project-link:hover {
    gap: 15px;
}

/* Contact Section */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.contact-info h3 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.contact-info p {
    color: var(--text-gray);
    margin-bottom: 30px;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-link {
    color: var(--text-light);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.1rem;
    transition: var(--transition);
}

.contact-link:hover {
    color: var(--highlight-color);
}

.contact-link i {
    font-size: 1.3rem;
    width: 30px;
}

.contact-form {
    background: var(--secondary-color);
    padding: 40px;
    border-radius: 15px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    background: var(--primary-color);
    border: 1px solid var(--accent-color);
    border-radius: 8px;
    color: var(--text-light);
    font-family: inherit;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--highlight-color);
}

/* Footer */
.footer {
    background: var(--primary-color);
    padding: 40px 0;
    text-align: center;
    border-top: 1px solid var(--accent-color);
}

.footer p {
    color: var(--text-gray);
    margin-bottom: 10px;
}

.footer i {
    color: var(--highlight-color);
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .hamburger {
        display: flex;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
    }
    
    .hamburger span {
        width: 25px;
        height: 3px;
        background: var(--text-light);
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .timeline::before {
        left: 30px;
    }
    
    .timeline-item,
    .timeline-item:nth-child(even) {
        justify-content: flex-start;
        padding-left: 80px;
        padding-right: 0;
    }
    
    .timeline-date {
        left: 30px;
        transform: translateX(-50%);
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
}
