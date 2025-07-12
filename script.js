// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const jobTitle = document.querySelector('.search-field input').value;
        const location = document.querySelector('.search-field select').value;
        
        if (jobTitle.trim() || location !== 'Select Location') {
            // Redirect to jobs page with search parameters
            window.location.href = `jobs.html?title=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}`;
        }
    });
}

// Category card click handlers
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent;
        window.location.href = `jobs.html?category=${encodeURIComponent(category)}`;
    });
});

// Job card apply button handlers
document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Check if user is logged in (simulated)
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        
        if (!isLoggedIn) {
            alert('Please log in to apply for jobs');
            window.location.href = 'login.html';
        } else {
            // Show success message
            btn.textContent = 'Applied!';
            btn.style.backgroundColor = '#16a34a';
            btn.disabled = true;
            
            // Store application in localStorage
            const applications = JSON.parse(localStorage.getItem('applications') || '[]');
            applications.push({
                id: Date.now(),
                jobTitle: btn.closest('.job-card').querySelector('h3').textContent,
                company: btn.closest('.job-card').querySelector('.job-company span').textContent,
                appliedDate: new Date().toISOString().split('T')[0],
                status: 'applied'
            });
            localStorage.setItem('applications', JSON.stringify(applications));
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc2626';
            isValid = false;
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });
    
    return isValid;
}

// File upload handling
function handleFileUpload(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    
    if (input && preview) {
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                preview.textContent = `Selected: ${file.name}`;
                preview.style.color = '#16a34a';
            }
        });
    }
}

// Initialize file upload handlers
document.addEventListener('DOMContentLoaded', () => {
    handleFileUpload('cv-upload', 'cv-preview');
    handleFileUpload('company-logo', 'logo-preview');
});

// Dashboard navigation
document.querySelectorAll('.dashboard-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.dashboard-nav a').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show corresponding content (this would be expanded in a real app)
        const targetId = link.getAttribute('href').substring(1);
        showDashboardSection(targetId);
    });
});

function showDashboardSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Status filter functionality
function filterApplications(status) {
    const rows = document.querySelectorAll('.applications-table tbody tr');
    
    rows.forEach(row => {
        const statusCell = row.querySelector('.status-badge');
        if (status === 'all' || statusCell.textContent.toLowerCase() === status.toLowerCase()) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Pagination functionality
function setupPagination() {
    const paginationBtns = document.querySelectorAll('.pagination button');
    
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            paginationBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // In a real app, this would load the corresponding page of results
            console.log('Loading page:', btn.textContent);
        });
    });
}

// Initialize pagination if on jobs page
if (window.location.pathname.includes('jobs.html')) {
    document.addEventListener('DOMContentLoaded', setupPagination);
}

// Salary range slider
const salarySlider = document.getElementById('salary-range');
const salaryDisplay = document.getElementById('salary-display');

if (salarySlider && salaryDisplay) {
    salarySlider.addEventListener('input', (e) => {
        const value = e.target.value;
        salaryDisplay.textContent = `AED ${value}+`;
    });
}

// Local storage utilities
const storage = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key) => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    }
};

// Simulate user login/logout
function login(email, password) {
    // Simulate login validation
    if (email && password) {
        storage.set('isLoggedIn', true);
        storage.set('userEmail', email);
        return true;
    }
    return false;
}

function logout() {
    storage.remove('isLoggedIn');
    storage.remove('userEmail');
    window.location.href = 'index.html';
}

// Check login status and update UI
function checkLoginStatus() {
    const isLoggedIn = storage.get('isLoggedIn');
    const loginBtn = document.querySelector('.login-btn');
    
    if (isLoggedIn && loginBtn) {
        loginBtn.textContent = 'Dashboard';
        loginBtn.href = 'candidate-dashboard.html';
    }
}

// Initialize login status check
document.addEventListener('DOMContentLoaded', checkLoginStatus);

// Save job functionality
function saveJob(jobId) {
    const savedJobs = storage.get('savedJobs') || [];
    
    if (!savedJobs.includes(jobId)) {
        savedJobs.push(jobId);
        storage.set('savedJobs', savedJobs);
        
        // Update UI
        const saveBtn = document.querySelector(`[data-job-id="${jobId}"] .save-btn`);
        if (saveBtn) {
            saveBtn.innerHTML = '<i class="fas fa-heart"></i> Saved';
            saveBtn.style.color = '#dc2626';
        }
    }
}

// Load saved jobs
function loadSavedJobs() {
    const savedJobs = storage.get('savedJobs') || [];
    
    savedJobs.forEach(jobId => {
        const saveBtn = document.querySelector(`[data-job-id="${jobId}"] .save-btn`);
        if (saveBtn) {
            saveBtn.innerHTML = '<i class="fas fa-heart"></i> Saved';
            saveBtn.style.color = '#dc2626';
        }
    });
}

// Initialize saved jobs on page load
document.addEventListener('DOMContentLoaded', loadSavedJobs);

// Search filters
function applyFilters() {
    const jobType = document.querySelector('#job-type').value;
    const location = document.querySelector('#location-filter').value;
    const industry = document.querySelector('#industry-filter').value;
    const salaryRange = document.querySelector('#salary-range').value;
    
    const jobItems = document.querySelectorAll('.job-item');
    
    jobItems.forEach(item => {
        let show = true;
        
        // Apply filters (simplified logic)
        if (jobType && !item.querySelector('.job-type').textContent.toLowerCase().includes(jobType.toLowerCase())) {
            show = false;
        }
        
        if (location && !item.querySelector('.job-location').textContent.toLowerCase().includes(location.toLowerCase())) {
            show = false;
        }
        
        item.style.display = show ? 'block' : 'none';
    });
}

// Add filter event listeners
document.addEventListener('DOMContentLoaded', () => {
    const filterInputs = document.querySelectorAll('#job-type, #location-filter, #industry-filter, #salary-range');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
});