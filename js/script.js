document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.querySelector('.theme-toggle');

    // Toggle del menú en móviles
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Toggle de tema oscuro/claro
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    });
});

