/**
 * Constellation Particle Network
 * Renders a lightweight, interactive particle constellation with colorful nodes
 * inspired by modern tech portfolio aesthetics.
 */
(function () {
    const canvas = document.getElementById('constellation-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let animationFrameId = null;

    // Palette desaturada y mate ("capa gris suave")
    const colors = [
        '#4a6b8c', // Muted steel blue
        '#528999', // Muted slate cyan
        '#726c8d', // Muted slate violet
        '#9b7a4e', // Muted warm ochre/sand
        '#558273', // Muted sage emerald
        '#995d6a', // Muted dusty rose
        '#64748b'  // Slate gray
    ];

    const particles = [];
    const particleCount = 45;
    const maxDistance = 145;

    const mouse = {
        x: null,
        y: null,
        radius: 130
    };

    function resize() {
        const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        width = rect.width;
        height = rect.height;
        dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 2.5; // 2.5 to 4.5
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.4 + 0.6;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;

            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.hypot(dx, dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= (dx / distance) * force * 1.5;
                    this.y -= (dy / distance) * force * 1.5;
                }
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.restore();
        }
    }

    function init() {
        resize();
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connect() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < maxDistance) {
                    const alpha = (1 - dist / maxDistance) * 0.28;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = '#94a3b8';
                    ctx.globalAlpha = alpha;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                    ctx.restore();
                }
            }

            // Connect to mouse if nearby
            if (mouse.x !== null && mouse.y !== null) {
                const p = particles[i];
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                    const alpha = (1 - dist / mouse.radius) * 0.35;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = '#4a6b8c';
                    ctx.globalAlpha = alpha;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        connect();

        animationFrameId = requestAnimationFrame(animate);
    }

    // Event listeners
    window.addEventListener('resize', () => {
        resize();
    });

    const parent = canvas.parentElement || window;
    parent.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    parent.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!prefersReducedMotion.matches) {
        init();
        animate();
    } else {
        init();
        for (let i = 0; i < particles.length; i++) particles[i].draw();
        connect();
    }
})();
