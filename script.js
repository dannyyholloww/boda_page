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
        effect: 'fade'
    });
});
