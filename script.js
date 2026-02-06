document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const menuData = {
        breakfast: [
            { name: "Classic Pancakes", price: "$8.99", desc: "Fluffy buttermilk pancakes with syrup", icon: "egg", color: "from-yellow-200 to-orange-300" },
            { name: "Avocado Toast", price: "$10.99", desc: "Smashed avocado on sourdough", icon: "salad", color: "from-green-200 to-green-400" }
        ],
        lunch: [
            { name: "Club Sandwich", price: "$11.99", desc: "Turkey, bacon, lettuce, tomato", icon: "sandwich", color: "from-yellow-200 to-yellow-400" },
            { name: "Margherita Pizza", price: "$13.99", desc: "Fresh mozzarella and basil", icon: "pizza", color: "from-red-200 to-red-400" }
        ],
        dinner: [
            { name: "Ribeye Steak", price: "$28.99", desc: "12oz premium ribeye with potatoes", icon: "beef", color: "from-red-300 to-red-500" },
            { name: "Pasta Carbonara", price: "$15.99", desc: "Classic Italian pasta", icon: "wheat", color: "from-yellow-300 to-yellow-500" }
        ],
        drinks: [
            { name: "Espresso", price: "$3.99", desc: "Bold Italian espresso shot", icon: "coffee", color: "from-amber-200 to-amber-400" },
            { name: "Cappuccino", price: "$4.99", desc: "Espresso with velvety foam", icon: "milk", color: "from-orange-200 to-orange-400" }
        ]
    };

    function renderMenu() {
        for (let category in menuData) {
            const list = document.getElementById(`${category}List`);
            if (list) {
                list.innerHTML = menuData[category].map(item => `
                    <div class="menu-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                        <div class="h-48 bg-gradient-to-br ${item.color} flex items-center justify-center">
                            <i data-lucide="${item.icon}" class="w-16 h-16"></i>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-xl font-semibold">${item.name}</h3>
                                <span class="text-primary font-bold">${item.price}</span>
                            </div>
                            <p class="text-gray-500 text-sm">${item.desc}</p>
                        </div>
                    </div>
                `).join('');
            }
        }
        lucide.createIcons();
    }

    renderMenu();

    const pages = document.querySelectorAll('.page-content');
    const links = document.querySelectorAll('[data-page]');
    const backButtons = document.querySelectorAll('.back-btn');

    function showPage(id) {
        pages.forEach(p => p.classList.add('hidden'));
        document.getElementById(id + 'Page').classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    links.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
    }));

    backButtons.forEach(btn => btn.addEventListener('click', () => showPage('home')));

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
});