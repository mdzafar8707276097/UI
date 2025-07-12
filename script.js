// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeAnimations();
    initializeSearch();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeFormValidation();
    initializeTooltips();
    initializeLazyLoading();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navAuth = document.querySelector('.nav-auth');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Toggle mobile menu visibility
            if (navMenu) {
                navMenu.classList.toggle('mobile-active');
            }
            if (navAuth) {
                navAuth.classList.toggle('mobile-active');
            }
        });
    }
}

// Search functionality
function initializeSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const keywordTags = document.querySelectorAll('.keyword-tag');
    const keywordsInput = document.getElementById('keywords');
    
    // Add click event to keyword tags
    keywordTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const keyword = this.textContent.trim();
            if (keywordsInput) {
                keywordsInput.value = keyword;
                searchJobs();
            }
        });
    });
    
    // Search input enter key
    if (keywordsInput) {
        keywordsInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchJobs();
            }
        });
    }
}

// Search jobs function
function searchJobs() {
    const keywords = document.getElementById('keywords').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    
    // Show loading state
    const searchBtn = document.querySelector('.search-btn');
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    searchBtn.disabled = true;
    
    // Simulate search API call
    setTimeout(() => {
        // Reset button state
        searchBtn.innerHTML = originalText;
        searchBtn.disabled = false;
        
        // Show results notification
        showNotification(`Searching for "${keywords}" in ${category || 'all categories'} in ${location || 'all locations'}`, 'success');
        
        // In a real application, you would redirect to results page
        console.log('Search parameters:', { keywords, category, location });
    }, 2000);
}

// Category filtering
function filterByCategory(category) {
    showNotification(`Filtering jobs by ${category}`, 'info');
    
    // In a real application, this would filter the jobs
    console.log('Filtering by category:', category);
    
    // Simulate navigation to filtered results
    setTimeout(() => {
        // You would typically redirect to a jobs page with the category filter
        console.log('Redirecting to jobs page with category:', category);
    }, 1000);
}

// CTA button actions
function findJobs() {
    showNotification('Redirecting to job search...', 'info');
    
    // In a real application, redirect to jobs page
    setTimeout(() => {
        console.log('Redirecting to jobs page');
    }, 1000);
}

function postJob() {
    showNotification('Redirecting to job posting...', 'info');
    
    // In a real application, redirect to job posting page
    setTimeout(() => {
        console.log('Redirecting to job posting page');
    }, 1000);
}

// Scroll effects
function initializeScrollEffects() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Animation initialization
function initializeAnimations() {
    // Add loading class to elements for fade-in effect
    const animatedElements = document.querySelectorAll('.category-card, .testimonial-card, .employer-logo, .floating-card');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], select[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    showNotification(`Please fill in the ${input.placeholder || 'required field'}`, 'error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Process form submission
                showNotification('Form submitted successfully!', 'success');
            }
        });
    });
}

// Tooltip functionality
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            this.tooltipElement = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltipElement) {
                document.body.removeChild(this.tooltipElement);
                this.tooltipElement = null;
            }
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 500) {
        if (!scrollButton) {
            createScrollToTopButton();
        } else {
            scrollButton.style.display = 'flex';
        }
    } else {
        if (scrollButton) {
            scrollButton.style.display = 'none';
        }
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top-btn';
    button.onclick = scrollToTop;
    
    document.body.appendChild(button);
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const handleScroll = debounce(function() {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, 10);

window.addEventListener('scroll', handleScroll);

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.floating-card h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString() + '+';
        }, 20);
    });
}

// Initialize counter animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    });
    
    heroObserver.observe(heroSection);
}

// Add CSS for additional interactive elements
const additionalStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 12px;
        padding: 1rem 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
    }
    
    .notification.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid #10b981;
    }
    
    .notification-error {
        border-left: 4px solid #ef4444;
    }
    
    .notification-warning {
        border-left: 4px solid #f59e0b;
    }
    
    .notification-info {
        border-left: 4px solid #2563eb;
    }
    
    .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #6b7280;
        margin-left: auto;
    }
    
    .scroll-to-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .scroll-to-top-btn:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
    }
    
    .tooltip {
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 10000;
        opacity: 0;
        animation: fadeIn 0.3s ease forwards;
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #1f2937;
    }
    
    .search-field.error {
        border-color: #ef4444;
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        .nav-menu.mobile-active,
        .nav-auth.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            gap: 1rem;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Add the additional styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Performance optimization
window.addEventListener('load', function() {
    // Remove any loading screens
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
    
    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Service worker for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}