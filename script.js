// Manejo del formulario RSVP
const form = document.getElementById('rsvp-form');
form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const invitados = document.getElementById('invitados').value;
    const comentarios = document.getElementById('comentarios').value;

    const data = { nombre, invitados, comentarios };

    try {
        // Enviar datos al servidor para que lo guarde en Firebase
        const response = await fetch('/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.text();
        if (response.ok) {
            alert(result);
            form.reset(); // Limpiar el formulario
        } else {
            alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
        }
    } catch (error) {
        console.error('Error al enviar:', error);
        alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
    }
});

// Observador para animaciones
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
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
