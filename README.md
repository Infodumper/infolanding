# `< Ignacio Vizoso />` — web-infodumper (infodumper.net)

> Sitio web profesional, portafolio de arquitectura técnica y plataforma de consultoría de **Ignacio Vizoso (Infodumper)** — Arquitecto de Software, Consultor de Procesos & Sistemas de IA.

---

## 🎯 Propuesta de Valor y Pipeline Metodológico

Toda intervención técnica, desarrollo de sistemas y consultoría estratégica se rige estrictamente por la secuencia:

```
Procesos → Datos → Software → Automatización → IA
```

1. **Procesos:** Diagnóstico operativo, eliminación de cuellos de botella y estandarización de flujos antes de escribir código.
2. **Datos:** Modelado relacional normalizado (PostgreSQL / SQL), consistencia transaccional y pipelines limpios de extracción.
3. **Software:** Desarrollo modular, arquitecturas B2B, APIs REST con FastAPI / PHP y frontend nativo ligero.
4. **Automatización:** Conexión de sistemas, sincronización de eventos y erradicación de tareas manuales repetitivas.
5. **IA:** Modelos locales y privados (Ollama / Qwen), arquitecturas RAG contextuales y herramientas bajo el protocolo MCP (Model Context Protocol) alineadas a normativas ISO 27001 e ISO 42001.

---

## 🛠️ Stack Tecnológico & Decisiones de Arquitectura

El proyecto está diseñado bajo una filosofía de **cero dependencias innecesarias, máxima velocidad de carga (sub-segundo) y soberanía técnica**:

- **Frontend:** HTML5 semántico, Vanilla JavaScript (ES6+) y Web Components nativos (`scripts/components.js`) para componentes reutilizables como encabezado y pie.
- **Estilos:** Vanilla CSS (`styles/human.css` / `styles/human.min.css`) estructurado con tokens de diseño, paleta mate/desaturada (*muted minimalist*), modo oscuro y soporte responsivo completo sin frameworks pesados.
- **Tipografía:** `Outfit` para títulos y jerarquías principales; `JetBrains Mono` para bloques de código, badges técnicos y parámetros de arquitectura.
- **Iconografía & Assets:** FontAwesome 6 purgado a 2.8 KB (reducción del 97%) y gráficos optimizados en WebP (`styles/images/`).
- **Seguridad HTTP:** Calificación A+ en seguridad web mediante directivas en [`.htaccess`](file:///c:/TGPN/web-infodumper/.htaccess) y [`vercel.json`](file:///c:/TGPN/web-infodumper/vercel.json) (HSTS Preload, Content-Security-Policy estricto, X-Frame-Options DENY, X-Content-Type-Options nosniff).

---

## 🤖 Preparación Agéntica (GEO / AEO & Agentic Ready)

El sitio implementa estándares de última generación para ser consumido, interpretado y recomendado por motores generativos de Inteligencia Artificial (SearchGPT, Perplexity, Gemini, Claude):

- **Manifiesto [`llms.txt`](file:///c:/TGPN/web-infodumper/llms.txt):** Contexto denso en Markdown puro que detalla la propuesta de valor, stack, proyecto insignia SIGO y mapa de rutas sin ruido de maquetación.
- **Grafos Schema.org (JSON-LD):** Entidades fuertemente tipadas (`Person`, `ProfessionalService`, `FAQPage`, `TechArticle`) con relaciones formales y sincronización de datos con el DOM.
- **Control de Rastreo ([`robots.txt`](file:///c:/TGPN/web-infodumper/robots.txt)):** Autorización explícita para rastreadores de IA líderes (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.).
- **Mapa de Sitio ([`sitemap.xml`](file:///c:/TGPN/web-infodumper/sitemap.xml)):** Índice con las 11 URLs canónicas indexables bajo HTTPS.

---

## 📊 Medición y Analítica (GTM + GA4)

La analítica se encuentra desacoplada del frontend e inyectada mediante Google Tag Manager:

- **Contenedor GTM:** `GTM-PHDCTSW4`
- **ID de Medición GA4:** `G-7X8PPK165J`
- **Eventos Medidos:**
  - `page_view`: Rastreo unificado en todas las páginas.
  - `click_social`: Monitoreo de clics hacia WhatsApp, LinkedIn, GitHub e Instagram.
  - `click_contact_link`: Registro de intención temprana hacia la página de contacto.
  - `generate_lead`: Conversión exitosa al enviar el formulario `#contact-form`.

Documentación detallada en [`geo/bitacora_gtm.md`](file:///c:/TGPN/web-infodumper/geo/bitacora_gtm.md).

---

## 📂 Estructura del Proyecto

```text
├── index.html               # Página principal (Home, propuesta de valor, carrusel)
├── sobre-mi.html            # Perfil profesional y trayectoria
├── contacto.html            # Formulario de contacto y canales directos
├── llms.txt                 # Manifiesto estructurado para LLMs y motores IA
├── robots.txt               # Directivas de indexación y acceso para bots
├── sitemap.xml              # Mapa de URLs canónicas del dominio
├── soluciones/              # Detalle de servicios y arquitectura por área
├── casos/                   # Casos de estudio y proyectos reales (SIGO, CliP26, etc.)
├── blog/                    # Artículos técnicos y publicaciones
├── geo/                     # Bitácoras de GTM, GEO/AEO y auditorías
├── scripts/                 # Lógica interactiva y Web Components modulares
└── styles/                  # Hojas de estilo Vanilla CSS y assets optimizados
```

---

## ✉️ Canales Oficiales

- **Web:** [infodumper.net](https://infodumper.net)
- **LinkedIn:** [Ignacio Vizoso](https://www.linkedin.com/in/ignacio-vizoso/)
- **GitHub:** [Infodumper](https://github.com/Infodumper)
- **Instagram:** [@infodumper.au](https://www.instagram.com/infodumper.au/)

