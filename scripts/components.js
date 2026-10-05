class SiteHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = this.getAttribute('base-path') || './';

        this.innerHTML = `
        <nav class="glass-nav">
            <div class="nav-container">
                <a href="${basePath}index.html" class="brand" aria-label="Ignacio Vizoso - Inicio">
                    <img src="${basePath}styles/images/logo_nav.webp" alt="Logo Ignacio Vizoso" class="brand-logo" width="34" height="34">
                    <span class="brand-bracket">&lt;</span>
                    <span class="brand-name">Ignacio Vizoso</span>
                    <span class="brand-slash">/&gt;</span>
                </a>
                
                <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="primary-nav">
                    <i class="fas fa-bars" aria-hidden="true"></i>
                </button>
                
                <div class="nav-links" id="primary-nav">
                    <a href="${basePath}index.html#inicio">Inicio</a>
                    <a href="${basePath}index.html#enfoque">Enfoque</a>
                    <a href="${basePath}index.html#resuelvo">Qué Resuelvo</a>
                    <a href="${basePath}index.html#skills">Skills</a>
                    <a href="${basePath}index.html#casos">Proyectos</a>
                    <a href="${basePath}index.html#recursos">Recursos</a>
                    <a href="${basePath}sobre-mi.html">Sobre mí</a>
                    <a href="${basePath}contacto.html" class="nav-cta-btn">Contacto</a>
                </div>
            </div>
        </nav>
        `;

        const menuToggle = this.querySelector('.menu-toggle');
        const navLinks = this.querySelector('.nav-links');
        const icon = menuToggle ? menuToggle.querySelector('i') : null;

        if (menuToggle && navLinks) {
            const toggleMenu = (e) => {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                const isOpen = navLinks.classList.toggle('active');
                menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
                if (icon) {
                    if (isOpen) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            };

            const closeMenu = () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Abrir menú');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            };

            menuToggle.addEventListener('click', toggleMenu);

            // Manejo de clics en los enlaces de navegación
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href') || '';
                    if (href.includes('#')) {
                        const hash = href.split('#')[1];
                        const isCurrentPage = !link.pathname || 
                            link.pathname === window.location.pathname ||
                            (window.location.pathname === '/' && link.pathname.endsWith('index.html')) ||
                            (window.location.pathname.endsWith('index.html') && (link.pathname === '/' || link.pathname.endsWith('index.html')));

                        if (isCurrentPage && hash) {
                            const target = document.getElementById(hash);
                            if (target) {
                                e.preventDefault();
                                closeMenu();
                                target.scrollIntoView({ behavior: 'smooth' });
                                if (history.pushState) {
                                    history.pushState(null, '', '#' + hash);
                                }
                                return;
                            }
                        }
                    }
                    closeMenu();
                });
            });

            // Cerrar menú al hacer clic fuera del componente
            document.addEventListener('click', (e) => {
                if (!this.contains(e.target)) {
                    closeMenu();
                }
            });

            // Cerrar con tecla Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeMenu();
                }
            });
        }
    }
}

class SiteFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = this.getAttribute('base-path') || './';
        this.innerHTML = `
        <footer class="minimal-footer">
            <div class="footer-container content-wrapper">
                <div class="footer-info">
                    <p class="footer-brand">
                        <span class="brand-bracket">&lt;</span>
                        <strong>Ignacio Vizoso</strong>
                        <span class="brand-slash">/&gt;</span>
                        <span class="footer-year">&copy; 2026</span>
                    </p>
                    <p class="footer-tagline">Procesos &rarr; Datos &rarr; Software &rarr; Automatización &rarr; IA</p>
                </div>
                <nav class="social-links" aria-label="Redes sociales">
                    <a href="https://www.linkedin.com/in/ignacio-vizoso/" target="_blank" rel="noopener noreferrer"
                        title="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://github.com/Infodumper" target="_blank" rel="noopener noreferrer" title="GitHub"><i
                            class="fab fa-github" aria-hidden="true"></i></a>
                    <a href="${basePath}contacto.html" title="Contacto"><i class="fas fa-envelope" aria-hidden="true"></i></a>
                </nav>
            </div>
        </footer>
        <a href="https://wa.me/5492235869878" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" title="Contactar por WhatsApp">
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </a>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
