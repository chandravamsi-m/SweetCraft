/* c:/Users/Admin/Desktop/HTML Templates/phase 2/SweetCraft/assets/js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initRTL();
    initNavbar();
    initDashboardSPA();
    initOrderWizard();
    
    // Initialize Lucide icons if available
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Theme Management (Dark/Light mode)
function initTheme() {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('sweetcraft-theme');
    
    let currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            document.documentElement.classList.toggle('dark', next === 'dark');
            localStorage.setItem('sweetcraft-theme', next);
        });
    });
}

// RTL/LTR Management
function initRTL() {
    const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
    const storedDir = localStorage.getItem('sweetcraft-dir') || 'ltr';
    
    document.documentElement.setAttribute('dir', storedDir);
    
    rtlToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = document.documentElement.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('dir', newDir);
            localStorage.setItem('sweetcraft-dir', newDir);
        });
    });
}

// Navbar scroll effect & mobile menu
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if(navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md', 'glass');
                navbar.classList.remove('bg-transparent', 'py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('shadow-md', 'glass', 'py-2');
                navbar.classList.add('bg-transparent', 'py-4');
            }
        });
    }

    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
    }

    if(closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    }

    // Click outside mobile menu to close it
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('open') && mobileMenuBtn) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('open');
            }
        }
    });
    
    initActiveLinks();
}

// Active Link Highlighting
function initActiveLinks() {
    const getPageName = (path) => {
        const parts = path.split('/');
        return parts[parts.length - 1] || 'index.html';
    };

    let path = window.location.pathname;
    if (path === '' || path === '/' || path.endsWith('/')) {
        path += 'index.html';
    }
    const currentPage = getPageName(path);

    // Desktop
    const desktopLinks = document.querySelectorAll('nav a');
    desktopLinks.forEach(link => {
        const linkPage = getPageName(link.getAttribute('href') || '');
        if (linkPage === currentPage && linkPage !== '') {
            // Updated active styling
            link.classList.add('text-[#b5834a]', 'font-bold', 'active-link');
            link.classList.remove('text-text', 'opacity-80', 'hover:text-primary');
            const parentGroup = link.closest('.group');
            if (parentGroup) {
                const trigger = parentGroup.querySelector('span');
                if (trigger) {
                    trigger.classList.add('text-[#b5834a]', 'font-bold', 'active-link');
                    trigger.classList.remove('hover:text-primary');
                }
            }
        }
    });

    // Mobile
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        const linkPage = getPageName(link.getAttribute('href') || '');
        if (linkPage === currentPage && linkPage !== '') {
            link.classList.add('text-[#b5834a]', 'font-bold', 'active-link');
            link.classList.remove('text-text', 'opacity-80', 'hover:text-primary');
            const details = link.closest('details');
            if (details) {
                details.setAttribute('open', '');
                const summary = details.querySelector('summary');
                if (summary) {
                    summary.classList.add('text-[#b5834a]', 'font-bold', 'active-link');
                    summary.classList.remove('text-text', 'hover:bg-secondary', 'hover:bg-opacity-60');
                }
            }
        }
    });
}

// Dashboard SPA Logic
function initDashboardSPA() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.spa-section');
    const mobileMenuBtn = document.getElementById('dashboard-mobile-menu-btn');
    const sidebar = document.getElementById('dashboard-sidebar');

    if(sidebarLinks.length === 0) return;

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active to clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(sec => sec.classList.remove('active'));

            // Show target section
            const targetId = link.getAttribute('data-target');
            if(targetId) {
                const targetSec = document.getElementById(targetId);
                if(targetSec) targetSec.classList.add('active');
                
                // Update URL hash for direct linking
                window.history.replaceState(null, null, '#' + targetId.replace('section-', ''));
            }

            // Close mobile sidebar if open
            if(sidebar && window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
            }
        });
    });

    // Mobile Sidebar Toggle
    if(mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }

    // Handle direct link to tab via URL hash
    if (window.location.hash) {
        const hashTargetId = 'section-' + window.location.hash.substring(1);
        const hashLink = Array.from(sidebarLinks).find(l => l.getAttribute('data-target') === hashTargetId);
        if (hashLink) {
            hashLink.click();
        }
    }
}

// Multi-step Order Wizard Logic
function initOrderWizard() {
    const wizardForm = document.getElementById('order-wizard');
    const steps = document.querySelectorAll('.wizard-step');
    const stepBtns = document.querySelectorAll('.wizard-step-btn');
    const nextBtns = document.querySelectorAll('.wizard-next');
    const prevBtns = document.querySelectorAll('.wizard-prev');

    if(!wizardForm || steps.length === 0) return;

    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            if(i === index) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        stepBtns.forEach((btn, i) => {
            if(i <= index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Allow clicking step buttons directly if they have been reached before
    stepBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Simple validation: only allow going to previous steps or next step
            if(index <= currentStep) {
                currentStep = index;
                showStep(currentStep);
            }
        });
    });
}
