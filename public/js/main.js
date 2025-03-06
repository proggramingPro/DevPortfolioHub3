// Data objects to simulate dynamic content
const skillsData = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' }
];

const projectsData = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Task Manager',
        description: 'A responsive task management application',
        technologies: ['JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'Portfolio Website',
        description: 'A modern portfolio website showcasing developer skills',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
];

const experienceData = [
    {
        role: 'Senior Developer',
        company: 'Tech Corp',
        period: '2020 - Present',
        description: 'Leading development of enterprise applications'
    },
    {
        role: 'Full Stack Developer',
        company: 'StartUp Inc',
        period: '2018 - 2020',
        description: 'Developed and maintained multiple web applications'
    }
];

// Helper function to create elements with classes
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
}

// Load Skills
function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsData.forEach(skill => {
        const skillCard = createElement('div', 'skill-card');
        skillCard.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.level}</p>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsData.forEach(project => {
        const projectCard = createElement('div', 'project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Load Experience
function loadExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    experienceData.forEach((exp, index) => {
        const timelineItem = createElement('div', 'timeline-item');
        timelineItem.innerHTML = `
            <div class="timeline-content ${index % 2 === 0 ? 'left' : 'right'}">
                <h3>${exp.role}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Handle Contact Form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    loadSkills();
    loadProjects();
    loadExperience();
    setupContactForm();
});

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
