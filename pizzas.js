const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul'); // Selecciona la lista de enlaces dentro de <nav>

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});