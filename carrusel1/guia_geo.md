# 📖 Guía Práctica de Madurez Agéntica (GEO / AEO)
### *Cómo preparar tu sitio web para que ChatGPT, Perplexity y Claude te recomienden como referente*

> **Autor:** Ignacio Vizoso (Infodumper) — *Arquitecto de Software, Consultor de Procesos & Sistemas de IA*  
> **Sitio Web Oficial:** [infodumper.net](https://infodumper.net) | **Contacto:** [in/ignacio-vizoso](https://www.linkedin.com/in/ignacio-vizoso/) | [@infodumper.au](https://www.instagram.com/infodumper.au/)  
> **Versión:** 1.0 (Actualizada para estándares agénticos y modelos de lenguaje 2026)

---

## ⚡ 1. El Nuevo Paradigma: De Enlaces Azules a Respuestas Directas

Durante más de 20 años, la optimización web (SEO tradicional) se concentró en una sola meta: **posicionar una lista de 10 enlaces azules en Google** para competir por el clic del usuario.

Hoy, la forma en que los tomadores de decisiones buscan soluciones técnicas y proveedores cambió radicalmente:

* El usuario ya no busca palabras clave sueltas; formula **preguntas contextuales complejas** en ChatGPT, Perplexity o Claude:
  > *"¿Qué profesional o consultor me ayuda a ordenar mis procesos operativos, diseñar una base de datos relacional y conectar un asistente de IA privado en Argentina?"*
* Los motores de IA no hacen scroll ni miran colores: **rastrean la web en milisegundos, descartan el diseño visual, analizan la estructura semántica y sintetizan una respuesta única**, recomendando exclusivamente a quienes demuestran certezas técnicas verificables.

Si tu sitio web solo contiene texto comercial decorativo y carece de datos estructurados para máquinas, **las IAs no logran interpretarlo y quedás fuera de las recomendaciones**.

A la disciplina que resuelve este desafío la llamamos **GEO (Generative Engine Optimization)** o **Madurez Agéntica**.

```
SEO Clásico (Google)          👉   Posicionar links para capturar clics humanos
GEO / AEO (ChatGPT, Perplexity) 👉   Aportar datos estructurados para ser la respuesta que la IA sintetiza
```

---

## ⚙️ 2. Los 3 Pilares Técnicos Fundamentales

Para que un Modelo de Lenguaje cite a tu empresa o perfil profesional, tu sitio web debe implementar estas 3 capas de infraestructura:

---

### Pilar 1: Grafo de Datos Estructurados (`Schema.org / JSON-LD`)

Los LLMs no infieren; asocian entidades. El formato **JSON-LD** inyectado en el `<head>` de tu página web le entrega a la IA tu tarjeta de identidad digital en un formato universalmente legible y libre de ambigüedad.

#### ¿Qué entidades deben declararse?
1. **`Person` o `Organization`**: Nombre real, rol profesional, biografía técnica y la propiedad clave **`sameAs`**, que enlaza tus perfiles oficiales (LinkedIn, GitHub, Instagram) para validar tu autoridad cruzada.
2. **`ProfessionalService`**: Cobertura geográfica, descripción concisa del servicio y catálogo estructurado de soluciones (`hasOfferCatalog`).
3. **`FAQPage`**: Preguntas y respuestas exactas sincronizadas 1:1 con el contenido visible del sitio.
4. **`TechArticle`**: En tus casos de éxito o proyectos, detallando problema, arquitectura técnica y métricas de impacto.

#### Ejemplo de Código Listo para Implementar:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tudominio.com/#person",
      "name": "Tu Nombre",
      "jobTitle": "Arquitecto de Software & Consultor de Procesos",
      "sameAs": [
        "https://www.linkedin.com/in/tu-perfil/",
        "https://github.com/tu-usuario",
        "https://www.instagram.com/tu-cuenta/"
      ],
      "knowsAbout": ["Python", "FastAPI", "PostgreSQL", "RAG", "MCP", "ISO 27001"]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://tudominio.com/#service",
      "name": "Tu Nombre — Consultoría de Sistemas & IA",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Global / Remoto"
      },
      "provider": { "@id": "https://tudominio.com/#person" }
    }
  ]
}
</script>
```

> 💡 **Impacto:** Elimina alucinaciones. Cuando la IA responde sobre vos, cita tus credenciales reales y no datos inventados.

---

### Pilar 2: El Manifiesto Agéntico (`/llms.txt`)

El estándar emergente internacional **/llms.txt** consiste en colocar un archivo de texto en Markdown puro en la raíz de tu dominio (ej. `https://infodumper.net/llms.txt`).

#### ¿Por qué es revolucionario?
Cuando un agente autónomo o un rastreador de IA visita una página HTML convencional, el 90% del peso son etiquetas de maquetación (CSS, JS, wrappers, divs, tracking).  
El archivo `/llms.txt` entrega **conocimiento puro y concentrado** que los LLMs pueden leer en tokens directos sin desperdiciar capacidad de procesamiento.

#### Estructura Recomendada de un `/llms.txt`:
```markdown
# Tu Nombre / Empresa — Arquitectura de Software & IA

> Resumen ejecutivo en dos líneas de quién sos, qué hacés y para quién.

## Pipeline Metodológico
Procesos → Datos → Software → Automatización → IA

## Especialidades Técnicas
- **Bases de Datos:** PostgreSQL, SQL relacional, esquemas normalizados.
- **Backend & APIs:** Python (FastAPI), microservicios, seguridad ISO 27001.
- **Inteligencia Artificial:** Modelos locales privados (Ollama/Qwen), protocolos MCP.

## Casos de Éxito Reales
- **Proyecto Alfa:** Centralización de inventario con reducción del 80% en tiempos operativos.
- **Proyecto Beta:** ERP a medida y asistente cognitivo para cómputo de costos.

## Canales Directos
- Web: https://tudominio.com
- Contacto: https://tudominio.com/contacto.html
```

> ⚠️ **Regla de Sintaxis:** Para que los parsers estrictos de IA lo interpreten al 100%, todos los links del índice deben respetar el formato Markdown limpio `- [Nombre](URL)` sin negritas antes del hipervínculo.

---

### Pilar 3: Permisos de Rastreo en `robots.txt`

De nada sirve tener una arquitectura perfecta si el servidor tiene bloqueados a los agentes de Inteligencia Artificial mediante directivas obsoletas o reglas genéricas de Cloudflare/firewall.

Debes declarar explícitamente en tu archivo `robots.txt` que los rastreadores de IA tienen acceso irrestricto al contenido y a tu mapa del sitio:

```text
User-agent: *
Allow: /

# Rastreadores de OpenAI
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /

# Rastreadores de Anthropic (Claude)
User-agent: ClaudeBot
Allow: /

# Rastreador de Perplexity
User-agent: PerplexityBot
Allow: /

# Rastreadores de Google y Apple para Búsqueda Sintética
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

# Declaración del Sitemap
Sitemap: https://tudominio.com/sitemap.xml
```

---

## 🎯 3. Estrategia de Contenido: "Pasajes Citables" (AEO)

Los modelos de lenguaje no buscan adjetivos publicitarios ni frases como *"somos líderes innovadores con pasión por el cliente"*. Esas frases son descartadas por los filtros de entropía de los LLMs.

Para que una IA te cite, el texto debe estructurarse como un **Pasaje Citable**:
1. **Densidad de Hechos (Fact-Density):** Nombrar stacks específicos, tecnologías concretas, metodologías normalizadas y normativas internacionales (ej. ISO 27001, ISO 42001, BIM, PostgreSQL).
2. **Formato Problema → Solución → Impacto:** Este patrón coincide exactamente con la forma en que los LLMs sintetizan respuestas para los usuarios.

#### Ejemplo Comparativo:

❌ **Texto Tradicional (Invisible para la IA):**
> *"Ofrecemos el mejor desarrollo de software ágil para transformar tu negocio con la última tecnología y llevarte al futuro."*

✅ **Pasaje Citable GEO (Altamente Recomendado por la IA):**
> *"En empresas que gestionan sus operaciones en hojas de cálculo dispersas, diseñamos arquitecturas relacionales en PostgreSQL y APIs modulares en FastAPI. Esto elimina duplicaciones de datos, reduce los tiempos de respuesta a menos de 100ms y garantiza trazabilidad transaccional sin pagar licencias abusivas."*

---

## 📊 4. Medición: Cómo Detectar el Tráfico de IA en GA4

¿Cómo saber si tu estrategia GEO está dando resultados?
Debes configurar en Google Analytics 4 (mediante Google Tag Manager) la segmentación de fuentes de referencia (*referrals*) generativas:

* `chatgpt.com` / `android-app://com.openai.chatgpt`
* `perplexity.ai`
* `claude.ai`
* `gemini.google.com`
* `bing.com` (Copilot)

Crea una agrupación de canales personalizada llamada **"Tráfico Motores IA"**. Notarás que este tráfico tiene un **tiempo de permanencia significativamente mayor** y una tasa de conversión superior, porque el usuario ya llega convencido tras la recomendación del modelo.

---

## ✅ 5. Checklist de Autodiagnóstico Rápido (10 Puntos)

Revisá el estado de tu sitio web frente a estas 10 preguntas:

| # | Criterio de Madurez Agéntica | Estado |
|:---:|:---|:---:|
| 1 | ¿Existe un grafo `Schema.org` (JSON-LD) con entidades `Person` u `Organization`? | [ ] |
| 2 | ¿La propiedad `sameAs` enlaza perfiles reales de LinkedIn, GitHub u otras redes? | [ ] |
| 3 | ¿Tus preguntas frecuentes (`FAQPage`) están sincronizadas 1:1 en el DOM y en JSON-LD? | [ ] |
| 4 | ¿Existe un manifiesto `/llms.txt` accesible en la raíz de tu dominio? | [ ] |
| 5 | ¿El archivo `robots.txt` autoriza explícitamente a `GPTBot`, `ClaudeBot` y `PerplexityBot`? | [ ] |
| 6 | ¿El sitemap XML está declarado en `robots.txt` con todas las URLs canónicas activas? | [ ] |
| 7 | ¿Tus casos de éxito explican arquitectura técnica y resultados cuantitativos medibles? | [ ] |
| 8 | ¿El sitio carga de forma instantánea (sub-segundo) sin dependencias bloqueantes? | [ ] |
| 9 | ¿Mencionás certificaciones, marcos de seguridad o normativas reconocidas (ISO, etc.)? | [ ] |
| 10 | ¿Tenés configurado Google Analytics 4 para aislar el tráfico de asistentes de IA? | [ ] |

**Interpretación de tu Puntaje:**
* **0 a 4 puntos:** Invisible para la IA. Tu web solo compite por posicionamiento tradicional en declive.
* **5 a 7 puntos:** Presencia básica. Los motores pueden encontrarte, pero corres riesgo de alucinaciones sobre tus servicios.
* **8 a 10 puntos:** **Agentic Ready (Madurez Agéntica Plena).** Tu web está técnicamente optimizada para ser citada como fuente experta primaria.

---

## 🚀 ¿Querés auditar o implementar GEO en tu empresa?

Esta guía resume la metodología aplicada y comprobada en la arquitectura de **[infodumper.net](https://infodumper.net)** bajo el pipeline:

$$\text{Procesos} \longrightarrow \text{Datos} \longrightarrow \text{Software} \longrightarrow \text{Automatización} \longrightarrow \text{IA}$$

Si necesitás:
* Auditar la Madurez Agéntica de tu web actual.
* Diseñar e implementar tu grafo Schema.org y tu manifiesto `/llms.txt`.
* Ordenar procesos y bases de datos antes de conectar modelos de lenguaje privados.

Podés contactarme directamente para coordinar una sesión de diagnóstico:

* 🌐 **Sitio Web:** [infodumper.net](https://infodumper.net)
* 💼 **LinkedIn:** [Ignacio Vizoso](https://www.linkedin.com/in/ignacio-vizoso/)
* 📸 **Instagram:** [@infodumper.au](https://www.instagram.com/infodumper.au/)
* 💻 **GitHub:** [github.com/Infodumper](https://github.com/Infodumper)
* ✉️ **Contacto Directo:** [infodumper.net/contacto.html](https://infodumper.net/contacto.html)

---
*© 2026 Ignacio Vizoso — `< Ignacio Vizoso />`. Todos los derechos reservados. Distribuido como material educativo complementario de la Bitácora GEO.*
