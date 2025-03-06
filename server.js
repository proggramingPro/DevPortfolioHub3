const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Set up EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mock data
const portfolioData = {
    heroTitle: 'Welcome to My Portfolio',
    heroSubtitle: 'Full Stack Developer & Problem Solver',
    skills: [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' }
    ],
    projects: [
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
    ],
    experience: [
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
    ]
};

// Routes
app.get('/', (req, res) => {
    res.render('pages/index', portfolioData);
});

// Handle contact form submissions
app.post('/contact', (req, res) => {
    // Here you would typically handle the contact form submission
    // For now, we'll just send back a success message
    res.json({ message: 'Message received! Thank you for contacting.' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});