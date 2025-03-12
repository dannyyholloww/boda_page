document.addEventListener('DOMContentLoaded', function () {
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

    // Manejo del formulario RSVP
    const form = document.getElementById('rsvp-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const invitados = document.getElementById('invitados').value;
        const comentarios = document.getElementById('comentarios').value;

        const data = { nombre, invitados, comentarios };

        // Cambia la URL por la de tu aplicación web de Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbwJL7c61Ecsucv_AdHNT29vUpwDK0c4zNmFqagpUiIM62UW5MNzD4GFfkjHRiCcXuEB/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.mensaje); // Muestra un mensaje de éxito
                form.reset(); // Limpia el formulario
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
            });
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
});



