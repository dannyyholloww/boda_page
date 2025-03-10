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

        fetch('http://127.0.0.1:5000/guardar_asistencia', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => alert(data.mensaje))
            .catch(error => console.error('Error:', error));

        form.reset();
    });
});
