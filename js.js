
// Initialize Lucide icons
lucide.createIcons();

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.classList.toggle('dark', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const theme = html.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    lucide.createIcons();
});

// Navigation
const pages = {
    home: document.getElementById('homePage'),
    breakfast: document.getElementById('breakfastPage'),
    lunch: document.getElementById('lunchPage'),
    dinner: document.getElementById('dinnerPage'),
    drinks: document.getElementById('drinksPage')
};

function showPage(pageName) {
    Object.values(pages).forEach(page => page.classList.add('hidden'));
    pages[pageName].classList.remove('hidden');
    window.scrollTo(0, 0);
    lucide.createIcons();
}

// Category links
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = e.currentTarget.getAttribute('data-page');
        showPage(pageName);
    });
});

// Back buttons
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showPage('home');
    });
});

// Initialize icons on page load
lucide.createIcons();