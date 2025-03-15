// Observador para animaciones de secciones generales
const observerSections = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Observar todas las secciones generales
document.querySelectorAll('.section').forEach(section => {
    observerSections.observe(section);
});

// Observador para animaciones de las secciones de la historia
const observerHistoria = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Observar todas las secciones de la historia
document.querySelectorAll('.historia-seccion').forEach(seccion => {
    observerHistoria.observe(seccion);
});

// Efecto hover en imágenes
document.querySelectorAll('.story-images img, .gallery-item').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Inicialización de Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay: 3000 },
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Menú desplegable para móviles
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar el menú al hacer clic en el botón de hamburguesa
mobileMenu.addEventListener('click', function (event) {
    event.stopPropagation(); // Evitar que el clic se propague al documento
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function (event) {
    const isClickInsideMenu = navLinks.contains(event.target); // Verificar si el clic fue dentro del menú
    const isClickOnMobileMenu = mobileMenu.contains(event.target); // Verificar si el clic fue en el botón de hamburguesa

    if (!isClickInsideMenu && !isClickOnMobileMenu) {
        navLinks.classList.remove('active'); // Cerrar el menú si el clic fue fuera
    }
});

// Cerrar el menú al hacer clic en un enlace (opcional)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active'); // Cerrar el menú al hacer clic en un enlace
    });
});
