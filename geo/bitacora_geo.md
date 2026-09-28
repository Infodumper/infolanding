# Bitácora de Optimización para Inteligencia Artificial (GEO / AEO)

> Registro exhaustivo de las acciones de optimización GEO (Generative Engine Optimization) aplicadas en **infodumper.com** — la web profesional de **Ignacio Vizoso**.
>
> Este documento sirve como referencia técnica: qué se implementó, por qué, qué novedades de posicionamiento en IA se incorporaron y cómo mantenerlo en el tiempo.

---

## Estado General de la Implementación

| Tarea / Dimensión GEO | Estado | Detalle de Implementación |
|:----------------------|:------:|:--------------------------|
| **Datos estructurados JSON-LD** (`Person`, `ProfessionalService`, `FAQPage`) | ✅ Hecho | Grafo Schema.org completo con `sameAs` (LinkedIn, GitHub), habilidades técnicas normalizadas y localización geográfica. |
| **Sección FAQ visible + Schema FAQPage** | ✅ Hecho | Preguntas y respuestas exactas sincronizadas en HTML semántico y bloque JSON-LD. |
| **Manifiesto de IA (`/llms.txt`)** | ✅ Hecho | Archivo en la raíz con resumen ejecutivo, matriz de stack completa, desglose de soluciones, casos de éxito y mapa de URLs. |
| **Rastreadores IA en `robots.txt`** | ✅ Hecho | Permisos explícitos para GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, Meta, Cohere, Diffbot. |
| **Mapa del Sitio (`sitemap.xml`)** | ✅ Hecho | Sitemap XML estándar declarado en `robots.txt` y enlazando todas las páginas activas. |
| **Etiquetas Open Graph & Twitter Cards** | ✅ Hecho | `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`, optimizados para previews en buscadores sintéticos y redes. |
| **Arquitectura Multipágina Semántica** | ✅ Hecho | Directorios independientes (`/soluciones/`, `/casos/`, `/sobre-mi`, `/contacto`) para evitar dilución temática. |
| **Enfoque Metodológico Documentado** | ✅ Hecho | Secuencia clave: `Procesos → Datos → Software → Automatización → IA` registrada para citas directas. |
| **Despliegue & Headers (`vercel.json`)** | ✅ Hecho | Clean URLs, caché inmutable y encabezados de seguridad HTTP. |
| **Verificación en Google Search Console** | ⬜ Pendiente | Subir sitemap y verificar propiedad DNS una vez configurado el dominio final. |
| **Validación en Rich Results Test** | ⬜ Pendiente | Probar URL pública final en la herramienta de prueba de resultados enriquecidos. |

---

## 1. Datos Estructurados (JSON-LD / Schema.org)

### ¿Qué es y por qué es crítico para GEO?
Los **Datos Estructurados (Schema.org)** permiten que motores como SearchGPT, Perplexity, Google AI Overviews y Claude reconozcan la identidad del autor (`Person`), la entidad de servicios (`ProfessionalService`), sus credenciales verificables (`sameAs`, `knowsAbout`) y respuestas concretas (`FAQPage`) sin necesidad de inferencias imprecisas.

### Implementación en `index.html`:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://infodumper.com/#person",
      "name": "Ignacio Vizoso",
      "alternateName": "Nacho Vizoso",
      "jobTitle": "Arquitecto de Software, Consultor de Datos & Sistemas de IA",
      "sameAs": [
        "https://www.linkedin.com/in/ignacio-vizoso/",
        "https://github.com/Infodumper"
      ],
      "knowsAbout": [
        "Python", "PHP", "FastAPI", "SQL", "PostgreSQL", "Pandas",
        "RAG", "LLM", "Agentes de IA", "Ollama", "MCP",
        "ISO 27001", "ISO 42001", "BIM", "Dynamo"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://infodumper.com/#service",
      "name": "Ignacio Vizoso — Consultoría de Sistemas & IA (Infodumper)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mar del Plata",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://infodumper.com/#faq",
      "mainEntity": [ ... ]
    }
  ]
}
```

---

## 2. Manifiesto `/llms.txt` y Preparación para Búsqueda Agéntica

El estándar `llms.txt` proporciona un canal limpio y directo para que los rastreadores de IA procesen la propuesta de valor sin el peso del marcado de presentación.
- **Ubicación:** `https://infodumper.com/llms.txt`
- **Contenido:**
  1. Perfil profesional y enlaces verificados.
  2. Enfoque: `Procesos → Datos → Software → Automatización → IA`.
  3. Matriz técnica organizada por áreas (Programación, Datos, Backend, IA, Frontend, DevOps, Gestión, Seguridad ISO, AEC/BIM).
  4. Soluciones B2B explicadas bajo el formato *Problema Resuelto → Solución*.
  5. Casos de estudio resumidos con métricas e impacto.
  6. Respuestas a preguntas clave para grounding de IA.

---

## 3. Rastreo y Directivas en `robots.txt`

Se han habilitado todos los User-Agents de los principales laboratorios de IA para garantizar indexación y citación en tiempo real:
- **OpenAI:** `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`
- **Anthropic:** `ClaudeBot`, `anthropic-ai`
- **Perplexity:** `PerplexityBot`
- **Google:** `Google-Extended`
- **Apple & Meta:** `Applebot-Extended`, `Meta-ExternalAgent`
- **Cohere & Diffbot:** `Cohere-ai`, `Diffbot`

---

## 4. Estrategia de Pasajes Citables (AEO / GEO)

Para maximizar la probabilidad de que una IA seleccione a Ignacio Vizoso como respuesta a consultas de usuarios, cada sección sigue tres principios fundamentales:
1. **Densidad informativa:** Cada párrafo aporta datos concretos (tecnologías, metodologías, certificaciones o normas como ISO 27001 / ISO 42001).
2. **Estructura Problema-Solución-Impacto:** Facilita la síntesis generativa en respuestas de recomendación.
3. **Ausencia de ambigüedad:** Se evitan términos genéricos y se definen casos de uso precisos (ej. "privacidad de datos mediante LLMs locales con Ollama y MCP").

---

## 5. Novedades Relevantes y Tendencias GEO para el Posicionamiento

1. **Grounding en Fuentes Confiables (E-E-A-T Multimodal):**
   - Las IAs ahora cruzan los datos del sitio con perfiles de LinkedIn y repositorios de GitHub. Las URLs en `sameAs` deben mantenerse activas y actualizadas.
2. **Optimización para Protocolo MCP (Model Context Protocol):**
   - Al mencionar soporte y desarrollo sobre MCP, el sitio se posiciona de forma pionera para consultas técnicas especializadas en la nueva arquitectura de agentes autónomos.
3. **Gobernanza & Seguridad (ISO 42001 e ISO 27001):**
   - Las búsquedas corporativas de IA priorizan proveedores con nociones de seguridad y cumplimiento normativo. Destacar estas normativas aumenta significativamente la tasa de conversión en consultas B2B.

---

## 6. Próximos Pasos al Desplegar en Producción

1. **Google Search Console:**
   - Registrar la propiedad de dominio.
   - Enviar `https://infodumper.com/sitemap.xml`.
2. **Pruebas de Búsqueda Generativa (Benchmarking):**
   - Realizar consultas de prueba en ChatGPT Search, Perplexity Pro y Gemini con prompts como:
     - *"¿Quién hace consultoría de sistemas y automatización con IA en Mar del Plata?"*
     - *"Arquitecto de software para ordenar procesos y bases de datos en Argentina"*
     - *"Cómo implementar agentes de IA locales seguros para empresas"*
3. **Monitoreo de Fuentes de Tráfico en GA4:**
   - Filtrar tráfico con origen en `chatgpt.com`, `perplexity.ai` y `claude.ai`.
