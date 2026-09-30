# Bitácora Técnica de Optimización GEO / AEO & Rendimiento

> Registro consolidado de arquitectura de datos, posicionamiento en motores de IA (Generative Engine Optimization) y optimización de rendimiento para **[infodumper.net](https://infodumper.net)** — web profesional de **Ignacio Vizoso**.

---

## 1. Matriz de Estado de Implementación

| Dimensión | Estado | Componente / Archivo | Detalle Técnico |
|:---|:---:|:---|:---|
| **Datos Estructurados (Home)** | ✅ Activo | [`index.html`](file:///c:/TGPN/web-infodumper/index.html) | Grafo Schema.org unificado: `Person`, `ProfessionalService`, `FAQPage` y `hasOfferCatalog`. |
| **Casos de Estudio (`TechArticle`)** | ✅ Activo | [`casos/`](file:///c:/TGPN/web-infodumper/casos/) | Marcado estructurado técnico en [`sigo.html`](file:///c:/TGPN/web-infodumper/casos/sigo.html), [`clip26.html`](file:///c:/TGPN/web-infodumper/casos/clip26.html), [`ms-bellass.html`](file:///c:/TGPN/web-infodumper/casos/ms-bellass.html) y [`tienda-joyas.html`](file:///c:/TGPN/web-infodumper/casos/tienda-joyas.html). |
| **Manifiesto Agéntico** | ✅ Activo | [`llms.txt`](file:///c:/TGPN/web-infodumper/llms.txt) | Contexto en Markdown puro con sintaxis estricta: pipeline metodológico, stack, proyecto SIGO, casos y mapa de URLs. |
| **Rastreadores de IA** | ✅ Activo | [`robots.txt`](file:///c:/TGPN/web-infodumper/robots.txt) | Acceso explícito a GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, Meta y Cohere. |
| **Mapa del Sitio XML** | ✅ Activo | [`sitemap.xml`](file:///c:/TGPN/web-infodumper/sitemap.xml) | 11 URLs canónicas indexables bajo protocolo HTTPS. |
| **Open Graph & Twitter Cards** | ✅ Activo | [`styles/images/og_preview.jpg`](file:///c:/TGPN/web-infodumper/styles/images/og_preview.jpg) | Banner 1200x630 (60 KB) con isotipo en alta definición optimizado para WhatsApp, LinkedIn y X. |
| **Favicon e Iconografía** | ✅ Activo | [`favicon.ico`](file:///c:/TGPN/web-infodumper/favicon.ico) | Paquete multirresolución (`favicon-16x16`, `favicon-32x32`, `apple-touch-icon`, `android-chrome`). |
| **Optimización de Imágenes** | ✅ Activo | [`styles/images/`](file:///c:/TGPN/web-infodumper/styles/images/) | 100% migrado a WebP con atributos `width`/`height` y `loading="lazy"` (-6.5 MB transferidos). |
| **CSS Crítico y Tipografía** | ✅ Activo | [`styles/human.min.css`](file:///c:/TGPN/web-infodumper/styles/human.min.css) | CSS minificado (32.6 KB) preloaded; fuentes Google asíncronas con fallback swap. |
| **FontAwesome Purgado** | ✅ Activo | [`styles/fontawesome.min.css`](file:///c:/TGPN/web-infodumper/styles/fontawesome.min.css) | Reducción de 99 KB a 2.8 KB autohospedado con `font-display: swap` (elimina bloqueo de render). |
| **Seguridad HTTP (A+) & Caché** | ✅ Activo | [`.htaccess`](file:///c:/TGPN/web-infodumper/.htaccess) / [`vercel.json`](file:///c:/TGPN/web-infodumper/vercel.json) | HSTS Preload (1 año), CSP estricto, COOP/CORP, `nosniff`, `DENY` y caché estática inmutable de 1 año. |
| **Analítica y GTM** | ✅ Activo | Todas las páginas (11 HTMLs) | Integración de Google Tag Manager (`GTM-PHDCTSW4`) con eventos GA4 (`click_social`, `click_contact_link`, `generate_lead`). |
| **Verificación Search Console** | 🔄 En curso | [`googlec396df155e146858.html`](file:///c:/TGPN/web-infodumper/googlec396df155e146858.html) | Token activo; pendiente validación tras propagación en Hostinger. |

---

## 2. Arquitectura de Datos Estructurados (Schema.org / JSON-LD)

Los motores generativos (SearchGPT, Perplexity, Google Gemini, Claude) priorizan entidades inequívocas y relaciones semánticas formales:

### Grafo Principal (`index.html`)
- **`Person` (`#person`)**:
  - `name`: Ignacio Vizoso
  - `jobTitle`: Arquitecto de Software, Consultor de Datos & Sistemas de IA
  - `sameAs`: Enlaces oficiales a LinkedIn ([`in/ignacio-vizoso`](https://www.linkedin.com/in/ignacio-vizoso/)), GitHub ([`github.com/Infodumper`](https://github.com/Infodumper)) e Instagram ([`@infodumper.au`](https://www.instagram.com/infodumper.au/))
  - `knowsAbout`: Python, FastAPI, PostgreSQL, SQL, Pandas, RAG, Ollama, MCP, ISO 27001, ISO 42001, BIM.
- **`ProfessionalService` (`#service`)**:
  - `name`: Ignacio Vizoso — Consultoría de Sistemas & IA (Infodumper)
  - `address`: Mar del Plata, Buenos Aires, Argentina (cobertura global/remota)
  - `hasOfferCatalog`: Catálogo estructurado de 4 servicios clave (Diagnóstico de Procesos, Software B2B / ERP, Datos & Dashboards BI, Agentes de IA Locales y Privados).
- **`FAQPage` (`#faq`)**:
  - 4 preguntas frecuentes técnicas con respuestas directas sincronizadas entre el DOM y JSON-LD.

### Casos de Estudio (`casos/*.html`)
- Cada estudio implementa el tipo **`TechArticle`**, detallando problema abordado, arquitectura de solución implementada, tecnologías y resultado cuantitativo para citación directa de IA.

---

## 3. Manifiesto `/llms.txt` & Indexación Agéntica

El archivo [`llms.txt`](file:///c:/TGPN/web-infodumper/llms.txt) ofrece una versión libre de markup para consumo directo por Modelos de Lenguaje y agentes autónomos:
1. **Identidad & Propuesta de Valor**: Resumen conciso del perfil profesional.
2. **Pipeline Metodológico Secuencial**:
   ```
   Procesos → Datos → Software → Automatización → IA
   ```
3. **Matriz de Especialidades Técnicas**: Desglose por áreas (Programación, Datos, Backend, IA, DevOps, AEC/BIM, Gestión ISO).
4. **Proyecto Insignia (SIGO)**: Especificaciones de ingeniería de costos, metodología Chandías, PostgreSQL y Supabase.
5. **Índice de URLs Canónicas**: Las 11 páginas estructuradas del sitio formateadas con la convención estándar `- [Nombre](URL)` para facilitar el parseo automático de los agentes.

---

## 4. Acceso y Reglas de Rastreo (`robots.txt`)

El archivo [`robots.txt`](file:///c:/TGPN/web-infodumper/robots.txt) otorga acceso irrestricto al sitemap y a todo el contenido para los bots generativos:
- **OpenAI**: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`
- **Anthropic**: `ClaudeBot`, `anthropic-ai`
- **Perplexity**: `PerplexityBot`
- **Google**: `Google-Extended`
- **Apple & Meta**: `Applebot-Extended`, `Meta-ExternalAgent`
- **Otros**: `Cohere-ai`, `Diffbot`

---

## 5. Estrategia de Contenido y Pasajes Citables (AEO)

Para maximizar menciones y apariciones como fuente primaria en respuestas de IA:
- **Densidad de Hechos (Fact-Density)**: Mención explícita de stacks concretos y normativas de seguridad (ISO 27001, ISO 42001) en lugar de terminología comercial abstracta.
- **Estructura Problema → Solución → Impacto**: Formato que coincide con los patrones de respuesta sintetizados por los LLMs.
- **Transparencia Arquitectónica**: Énfasis en desarrollo ligero (Vanilla JS), control total del código y soberanía de datos mediante modelos locales (Ollama/MCP).

---

## 6. Procedimientos de Validación y Métricas

### A. Validación de Schema.org
- Testear en [Google Rich Results Test](https://search.google.com/test/rich-results) ingresando `https://infodumper.net/`.
- Verificar detección limpia de `Person`, `ProfessionalService`, `FAQPage` y `TechArticle`.

### B. Segmentación de Tráfico de IA en Google Analytics 4
- Crear canal personalizado con fuentes de referencia (*referrals*):
  `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`, `bing.com`.
- Nombre sugerido: **"Tráfico Motores IA"**.

### C. Pruebas de Citación Agéntica (Prompt Benchmarking)
- Realizar consultas de sondeo en SearchGPT, Perplexity y Gemini:
  - *"Consultor de software y automatización con IA en Argentina"*
  - *"Arquitecto de software para ordenar procesos y bases de datos"*
  - *"Software de gestión de costos de obra civil y cómputo con PostgreSQL"*

---

## 7. Historial de Auditorías y Correcciones

### Resolución de Auditoría de Accesibilidad y Visibilidad (Lighthouse / AEO)
- **`index.html` (Accesibilidad ARIA):** Se corrigió la estructura del árbol de accesibilidad en el componente del carrusel (`#hero-dots-container`). Se removieron los atributos `role="tablist"` y `role="tab"` que generaban advertencias de jerarquía ARIA (hijos inválidos), garantizando validación perfecta y manteniendo la semántica con botones nativos.
- **`llms.txt` (Sintaxis Estricta de Enlaces):** Se normalizó la lista de enlaces en Markdown eliminando prefijos en negrita (`- **Título:** [URL]`), adoptando la sintaxis limpia `- [Título](URL)`. Esto resolvió la advertencia de parsers de agentes que fallaban al extraer enlaces válidos.
- **`index.html` (Sincronización Social en JSON-LD):** Se incorporó el canal oficial de Instagram (`https://www.instagram.com/infodumper.au/`) dentro de la propiedad `sameAs` de la entidad `Person`, asegurando coherencia entre el marcado estructurado, los enlaces visuales del pie y la medición en GTM.
