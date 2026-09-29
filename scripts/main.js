/**
 * Scripts de interactividad para la página principal (index.html)
 * Cumple con CSP estricto: sin scripts ni manejadores inline.
 */

// ─── Filtrado Global de Skills por Categoría ───
function filterCategory(category) {
    const filterBtns = document.querySelectorAll('.filter-chip');
    const skillCards = document.querySelectorAll('.skill-category-card');

    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    skillCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
            setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

// Exponer en window para interoperabilidad si fuera necesario
window.filterCategory = filterCategory;

document.addEventListener('DOMContentLoaded', () => {
    // ─── 1. Manejadores de Filtrado de Skills (chips, ribbon y hero) ───
    const filterElements = document.querySelectorAll('[data-filter]');
    filterElements.forEach(el => {
        el.addEventListener('click', (e) => {
            const cat = el.getAttribute('data-filter');
            if (cat) {
                filterCategory(cat);
            }
        });
    });

    // ─── 2. Inicialización del Carrusel Hero ───
    const track = document.getElementById('hero-carousel-track');
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('hero-prev-btn');
    const nextBtn = document.getElementById('hero-next-btn');

    if (track && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        let autoSlideInterval;

        function updateSlide(index) {
            currentSlide = (index + totalSlides) % totalSlides;
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === currentSlide);
            });

            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSlide);
            });
        }

        function nextSlide() {
            updateSlide(currentSlide + 1);
        }

        function prevSlide() {
            updateSlide(currentSlide - 1);
        }

        function startAutoPlay() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, 7000);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startAutoPlay();
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                updateSlide(idx);
                startAutoPlay();
            });
        });

        // Pausar con hover
        const carouselSection = document.getElementById('inicio');
        if (carouselSection) {
            carouselSection.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
            carouselSection.addEventListener('mouseleave', startAutoPlay);
        }

        // Soporte táctil / swipe
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchEndX < touchStartX - 40) {
                nextSlide();
                startAutoPlay();
            }
            if (touchEndX > touchStartX + 40) {
                prevSlide();
                startAutoPlay();
            }
        }

        // Iniciar rotación automática
        startAutoPlay();
    }

    // ─── 3. Despliegue/Colapso de Tecnologías en Skill Cards ───
    const allSkillCards = document.querySelectorAll('.skill-category-card');
    allSkillCards.forEach(card => {
        const expandBtn = card.querySelector('.skill-expand-btn');
        const toggleTrigger = card.querySelector('.skill-toggle-trigger');
        const toggleText = toggleTrigger ? toggleTrigger.querySelector('.toggle-text') : null;

        function toggleCard(e) {
            if (e) e.stopPropagation();
            const isExpanded = card.classList.toggle('expanded');
            if (expandBtn) {
                expandBtn.setAttribute('aria-expanded', isExpanded);
                expandBtn.setAttribute('title', isExpanded ? 'Ocultar tecnologías' : 'Desplegar tecnologías');
            }
            if (toggleTrigger) {
                toggleTrigger.setAttribute('aria-expanded', isExpanded);
            }
            if (toggleText) {
                toggleText.textContent = isExpanded ? 'Ocultar tecnologías' : 'Ver tecnologías';
            }
        }

        if (expandBtn) expandBtn.addEventListener('click', toggleCard);
        if (toggleTrigger) toggleTrigger.addEventListener('click', toggleCard);
    });
});
