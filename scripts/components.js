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
                
                <button class="menu-toggle" aria-label="Abrir menú">
                    <i class="fas fa-bars"></i>
                </button>
                
                <div class="nav-links">
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
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
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
        <a href="https://wa.me/5492235869878" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        `;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
