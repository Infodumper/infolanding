# Checklist GEO / Agentic Ready — infodumper.net

*Adaptada del playbook "Agentic Ready" para servicios de Arquitectura de Software, Consultoría de Procesos, Datos e IA.*

---

## 1. Datos estructurados (Schema.org / JSON-LD)

- [x] **Organization / ProfessionalService JSON-LD**: Nombre ("Ignacio Vizoso — Consultoría de Sistemas & IA (Infodumper)"), dirección en Mar del Plata, área de servicio (Remoto / Global), descripción y rango.
- [x] **Person JSON-LD para Ignacio Vizoso**: Nombre, cargo ("Arquitecto de Software & Consultor"), biografía, lista de tecnologías (`knowsAbout`), imagen y enlaces `sameAs` a LinkedIn y GitHub.
- [x] **FAQPage JSON-LD**: 4 preguntas y respuestas frecuentes implementadas tanto visualmente en `<details>/<summary>` como estructuradas en el grafo JSON-LD.
- [x] **Marcado en Casos de Estudio (`TechArticle`)**: Schema.org completo en `sigo.html`, `clip26.html`, `ms-bellass.html` y `tienda-joyas.html`.
- [x] **Catálogo de Servicios (`hasOfferCatalog`)**: Ofertas de arquitectura, datos e IA integradas en `ProfessionalService`.
- [ ] **Validación en Rich Results Test**: Verificar `https://infodumper.net/` una vez propagado el DNS en producción.

**Puntaje actual: 8 / 8 (Completo a nivel de código)**

---

## 2. Arquitectura de contenido (Adaptada a Servicios y B2B)

- [x] **Pasajes Citables y Respuestas Directas**: Secciones redactadas en formato problema-solución que responden a consultas de IA sobre ordenamiento de procesos, bases de datos, APIs y privacidad en IA.
- [x] **Enfoque de Arquitectura Normalizado**: Documentación del pipeline `Procesos → Datos → Software → Automatización → IA`.
- [x] **Páginas de Soluciones y Casos Reales**: Estructura multipágina con casos de estudio concretos (`SIGO`, `CliP26`, `MS-Bellass`, `Tienda Joyas`) que detallan problema, solución e impacto.
- [x] **Diferenciación del Perfil Profesional**: Stack técnico estructurado por categorías (Programación, Datos, Backend, IA, Frontend, DevOps, Gestión, Seguridad ISO, AEC/BIM).


**Puntaje actual: 8 / 8**

---

## 3. SEO Técnico y Acceso de Rastreadores IA

- [x] **Archivo `robots.txt`**: Permisos explícitos concedidos a los bots de IA (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `Meta-ExternalAgent`, `Cohere-ai`, `Diffbot`).
- [x] **Archivo `sitemap.xml`**: Creado y declarado en `robots.txt`, listando las 10 URLs del sitio bajo `https://infodumper.net/`.
- [x] **Rendimiento y Ligereza**: HTML estático, CSS puro sin dependencias pesadas, carga instantánea y optimización de logo a 90 KB.
- [x] **Open Graph & Twitter Cards**: Banner oficial 1200x630 (`og_preview.jpg`, 60 KB) con cerebrito en alta definición optimizado para WhatsApp y LinkedIn.
- [x] **Favicon Multirresolución**: `favicon.ico` + PNGs de alta densidad para todas las páginas.

**Puntaje actual: 8 / 8**

---

## 4. Infraestructura Agéntica

- [x] **Archivo `/llms.txt`**: Manifiesto Markdown completo en la raíz del sitio con `infodumper.net`, detallando propuesta de valor, capacidades técnicas, servicios, casos de éxito, respuestas a FAQs y sitemap.
- [x] **Compatibilidad con Protocolos Agénticos**: Soporte documentado para herramientas MCP (Model Context Protocol) y modelos locales (Ollama/Qwen).

**Puntaje actual: 8 / 8**

---

## 5. Señales de Confianza y Autoridad (E-E-A-T)

- [x] **Identidad Verificable**: Perfil profesional con enlaces directos a LinkedIn (`in/ignacio-vizoso`) y GitHub (`github.com/Infodumper`).
- [x] **Criterios de Seguridad y Normativas**: Respaldo técnico en normas internacionales (ISO 27001 para seguridad de la información e ISO 42001 para IA responsable).
- [x] **Canales de Contacto Directos**: Vías de comunicación verificables (formulario web, WhatsApp, Cal.com y LinkedIn).
- [ ] **Reseñas Externas & Menciones**: Incorporar testimonios citables de clientes a medida que se completen nuevos proyectos.

**Puntaje actual: 3 / 4**

---

## 6. Medición y Monitoreo GEO

- [x] **Procedimiento de Filtro IA en GA4**: Guía documentada para medir tráfico proveniente de `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`.
- [ ] **Benchmark Trimestral de Búsqueda Generativa**: Evaluar si las IAs citan a Ignacio Vizoso ante consultas de servicios técnicos en Argentina.

**Puntaje actual: 3 / 5**

---

## Resumen del Puntaje de Madurez Agéntica

| Módulo | Puntaje |
|:-------|:-------:|
| 1. Datos Estructurados | 8 / 8 |
| 2. Arquitectura de Contenido | 8 / 8 |
| 3. SEO Técnico y Acceso IA | 8 / 8 |
| 4. Infraestructura Agéntica | 8 / 8 |
| 5. Confianza y Autoridad | 3 / 4 |
| 6. Medición y Monitoreo | 3 / 5 |
| **TOTAL** | **38 / 41 (92.7% — Nivel Excelente / Agentic Ready)** |

---

## Próximas Acciones Prioritarias

1. Sincronizar en producción los archivos actualizados (`infodumper.net`).
2. Reenviar el sitemap en Google Search Console para pasar a verde.
3. Activar el canal personalizado de IA en GA4 según la guía de la bitácora.
