# Checklist GEO / Agentic Ready — infodumper.com

*Adaptada del playbook "Agentic Ready" para servicios de Arquitectura de Software, Consultoría de Procesos, Datos e IA.*

---

## 1. Datos estructurados (Schema.org / JSON-LD)

- [x] **Organization / ProfessionalService JSON-LD**: Nombre ("Ignacio Vizoso — Consultoría de Sistemas & IA (Infodumper)"), dirección en Mar del Plata, área de servicio (Remoto / Global), descripción y rango.
- [x] **Person JSON-LD para Ignacio Vizoso**: Nombre, cargo ("Arquitecto de Software & Consultor"), biografía, lista de tecnologías (`knowsAbout`), imagen y enlaces `sameAs` a LinkedIn y GitHub.
- [x] **FAQPage JSON-LD**: 4 preguntas y respuestas frecuentes implementadas tanto visualmente en `<details>/<summary>` como estructuradas en el grafo JSON-LD.
- [ ] **Validación en Rich Results Test**: Verificar `https://infodumper.com/` una vez propagado el DNS en producción.

**Puntaje actual: 7 / 8** *(Solo resta la verificación en vivo post-despliegue)*

---

## 2. Arquitectura de contenido (Adaptada a Servicios y B2B)

- [x] **Pasajes Citables y Respuestas Directas**: Secciones redactadas en formato problema-solución que responden a consultas de IA sobre ordenamiento de procesos, bases de datos, APIs y privacidad en IA.
- [x] **Enfoque de Arquitectura Normalizado**: Documentación del pipeline `Procesos → Datos → Software → Automatización → IA`.
- [x] **Páginas de Soluciones y Casos Reales**: Estructura multipágina con casos de estudio concretos (`CliP26`, `MS-Bellass`, `Tienda Joyas`) que detallan problema, solución e impacto.
- [x] **Diferenciación del Perfil Profesional**: Stack técnico estructurado por categorías (Programación, Datos, Backend, IA, Frontend, DevOps, Gestión, Seguridad ISO, AEC/BIM).

**Puntaje actual: 8 / 8**

---

## 3. SEO Técnico y Acceso de Rastreadores IA

- [x] **Archivo `robots.txt`**: Permisos explícitos concedidos a los bots de IA (`GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `Meta-ExternalAgent`, `Cohere-ai`, `Diffbot`).
- [x] **Archivo `sitemap.xml`**: Creado y declarado en `robots.txt`, listando todas las URLs principales del sitio con prioridades y frecuencias de actualización.
- [x] **Rendimiento y Ligereza**: HTML estático, CSS puro sin dependencias pesadas, carga instantánea y optimización para lectura sintética.
- [x] **Open Graph & Twitter Cards**: Configuración de `og:title`, `og:description`, `og:image`, `og:url` para indexación y previews en buscadores generativos.

**Puntaje actual: 8 / 8**

---

## 4. Infraestructura Agéntica

- [x] **Archivo `/llms.txt`**: Manifiesto Markdown completo en la raíz del sitio, detallando propuesta de valor, capacidades técnicas, servicios, casos de éxito, respuestas a FAQs y sitemap.
- [x] **Compatibilidad con Protocolos Agénticos**: Soporte documentado para herramientas MCP (Model Context Protocol) y modelos locales (Ollama/Qwen).

**Puntaje actual: 8 / 8**

---

## 5. Señales de Confianza y Autoridad (E-E-A-T)

- [x] **Identidad Verificable**: Perfil profesional con enlaces directos a LinkedIn (`in/ignacio-vizoso`) y GitHub (`github.com/Infodumper`).
- [x] **Criterios de Seguridad y Normativas**: Respaldo técnico en normas internacionales (ISO 27001 para seguridad de la información e ISO 42001 para IA responsable).
- [x] **Canales de Contacto Directos**: Vías de comunicación verificables (formulario web, correo electrónico, WhatsApp y agenda directa).
- [ ] **Reseñas Externas & Menciones**: Incorporar testimonios citables de clientes a medida que se completen nuevos proyectos.

**Puntaje actual: 3 / 4**

---

## 6. Medición y Monitoreo GEO

- [ ] **Configuración de Fuentes IA en GA4**: Crear canal personalizado para medir tráfico proveniente de `chatgpt.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`.
- [ ] **Benchmark Trimestral de Búsqueda Generativa**: Evaluar si las IAs citan a Ignacio Vizoso ante consultas de servicios técnicos en Argentina.

**Puntaje actual: 2 / 5**

---

## Resumen del Puntaje de Madurez Agéntica

| Módulo | Puntaje |
|:-------|:-------:|
| 1. Datos Estructurados | 7 / 8 |
| 2. Arquitectura de Contenido | 8 / 8 |
| 3. SEO Técnico y Acceso IA | 8 / 8 |
| 4. Infraestructura Agéntica | 8 / 8 |
| 5. Confianza y Autoridad | 3 / 4 |
| 6. Medición y Monitoreo | 2 / 5 |
| **TOTAL** | **36 / 41 (88% — Nivel Avanzado / Agentic Ready)** |

---

## Próximas Acciones Prioritarias

1. Desplegar en producción con el dominio final (`infodumper.com`).
2. Enviar el sitemap a Google Search Console.
3. Configurar el filtro de tráfico de IA en Google Analytics 4.
