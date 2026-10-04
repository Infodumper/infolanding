# 🧪 Bitácora Técnica & Guía de Implementación: Suite de QA y Testing Web Automatizado

> **Registro técnico consolidado de arquitectura de pruebas, aseguramiento de calidad (QA), detección de enlaces 404, validación de datos estructurados Schema.org, paridad CSS y blindaje de despliegues en [infodumper.net](https://infodumper.net).**  
> **Autor:** Ignacio Vizoso (Infodumper) — *Arquitecto de Software, Consultor de Procesos & Sistemas de IA*  
> **Metodología:** $\text{Procesos} \rightarrow \text{Datos} \rightarrow \text{Software} \rightarrow \text{Automatización} \rightarrow \text{IA}$  
> **Versión:** 1.0 (Auditoría Integral de Arquitectura Web Estática 2026)

---

## 📊 1. Resumen Ejecutivo & Ficha Técnica

| Métrica / Parámetro | Valor Obtenido | Estado |
|:---|:---:|:---:|
| **Comprobaciones Ejecutadas** | **335 checks automáticos** | ✅ Aprobado (100%) |
| **Comprobaciones Exitosas** | **335** | ✅ Cero regresiones |
| **Fallos Críticos (Errors)** | **0** | 🛡️ Cero deuda técnica |
| **Rotura de Enlaces (404s)** | **0** | 🔗 Integridad relacional total |
| **Desincronización CSS** | **0 bytes de divergencia** | 🎨 Paridad `human.css` = `human.min.css` |
| **Archivos HTML Auditados** | **13 páginas** | 📄 Cobertura del 100% del árbol web |
| **Tiempo Total de Ejecución** | **~0.8 segundos** | ⚡ Ultraligero y de ejecución instantánea |
| **Runtime & Dependencias** | Python 3.10+ Estándar Puro | 🪶 Cero paquetes externos (`node_modules` free) |
| **Automatización CI/CD** | GitHub Actions (`qa.yml`) | 🚀 Bloqueo preventivo antes del deploy |

---

## ⚡ 2. El Problema: El Mito de la Inmunidad en Webs Estáticas

En el desarrollo de software moderno y plataformas web minimalistas (HTML5 semántico, Vanilla CSS y Web Components nativos), suele imperar un sesgo cognitivo común:

> *"Al ser una web puramente estática sin base de datos en cliente ni runtime backend pesado, no se puede romper. Por ende, no necesita tests."*

La práctica en entornos reales demuestra que **las plataformas estáticas sufren una degradación técnica invisible y constante**:

```
[Mito Tradicional]
Web Estática = Rápida = Libre de Errores -> Nadie audita -> Enlaces 404 y JSON-LD roto -> Penalización en Google / IA

[Enfoque Riguroso Infodumper]
Web Estática -> 335 Tests Automatizados (< 0.8s) -> CI/CD con GitHub Actions -> Cero Deuda Técnica en Producción
```

### Los 5 Puntos de Fuga Invisibles:
1. **Ruptura de Enlaces Relativos (404s Silenciosos):** Al reestructurar directorios (`blog/`, `casos/`, `recursos/`), una discrepancia en rutas relativas (`./` vs `../` o rutas absolutas mal formadas) crea enlaces muertos que ningún linter básico de texto detecta.
2. **Anclas Fragmentadas (`#id` Huérfanas):** Botones CTA o menús que apuntan a `#skills`, `#enfoque` o `#casos` tras renombrar una sección o un identificador en el DOM.
3. **Corrupción en Datos Estructurados (Schema.org):** Una coma huérfana, comillas sin escapar o sintaxis JSON inválida en un bloque `<script type="application/ld+json">` impide que Google, SearchGPT, Perplexity y Claude interpreten la entidad del profesional o sus servicios.
4. **Degradación Jerárquica (SEO & Accesibilidad):** Ausencia de un encabezado `<h1>`, múltiples `<main>` en una misma página, o imágenes sin atributo `alt` descriptivo.
5. **Divergencia de Hojas de Estilo:** Modificar el archivo de desarrollo (`human.css`) y olvidar compilar/sincronizar el archivo minificado de producción (`human.min.css`), provocando discrepancias visuales impredecibles.

---

## ⚙️ 3. Arquitectura del Motor de QA (`tests/qa_suite.py`)

Para auditar el proyecto sin introducir dependencias de cientos de megabytes (`Puppeteer`, `Playwright`, `Selenium`, etc.), construimos un **motor nativo en Python 3 puro** basado en análisis léxico del DOM y resolución matemática de grafos de navegación:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          SUITE DE QA AUTOMATIZADA                               │
│                         tests/qa_suite.py (Python 3)                            │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         │
    ┌─────────────────┬──────────────────┼─────────────────┬──────────────────┐
    ▼                 ▼                  ▼                 ▼                  ▼
[MÓDULO 1]        [MÓDULO 2]         [MÓDULO 3]        [MÓDULO 4]         [MÓDULO 5]
SEO Semántico     Integridad de      Schema.org        Infraestructura    Higiene y
& Accesibilidad   Enlaces & Assets   JSON-LD           GEO & Agentes      Paridad CSS
• <title>         • CSS en disco     • Sintaxis JSON   • robots.txt       • human.css vs
• Single <h1>     • JS en disco      • @context oficial• sitemap.xml        human.min.css
• Single <main>   • Img en disco     • @graph tipado   • llms.txt denso   • Placeholders
• Meta & OG tags  • Enlaces 404      • Entidades válidas (GEO / AEO)        href="#"
• alt en <img>    • Anclas #id
```

### Librerías Utilizadas (Librería Estándar Exclusiva):
* `html.parser.HTMLParser`: Tokenizador nativo de eventos SAX para extraer etiquetas, atributos y texto sin costo de renderizado.
* `json`: Parser estricto para certificar la validez de los grafos JSON-LD.
* `xml.etree.ElementTree`: Validador de árboles XML para auditar `sitemap.xml`.
* `pathlib.Path` & `urllib.parse`: Motor algebraico para resolver rutas de sistema de archivos relativas al directorio raíz.

---

## 🔍 4. Detalle de los 5 Módulos de Validación

### Módulo 1: SEO Semántico, Estructura HTML5 & Accesibilidad (A11y)
Cada uno de los 13 archivos HTML es parseado secuencialmente verificando:
* **Título (`<title>`):** Presencia obligatoria y longitud mínima (> 8 caracteres).
* **Jerarquía de Encabezados:** Exactamente **un único `<h1>`** por página. Si una página tiene 0 o más de 1, el test falla.
* **Contenedor Semántico:** Exactamente **un único elemento `<main>`** estructural.
* **Metadatos Esenciales:** 
  - `meta description` (> 20 caracteres obligatorios).
  - Open Graph tags indispensables: `og:title`, `og:description`, `og:image` y `og:url`.
* **Accesibilidad de Imágenes:** Cada elemento `<img>` debe contar con un atributo `alt` no vacío y descriptivo.

### Módulo 2: Integridad Relacional de Enlaces & Assets (Cero 404s)
Construye una matriz de dependencias cruzadas en dos pasadas:
1. **Indexación de Anclas:** En la primera pasada, extrae y almacena en un diccionario en memoria todos los `id="..."` existentes en cada uno de los archivos HTML.
2. **Auditoría de Enlaces:**
   - **Hojas de Estilo (`<link rel="stylesheet">`):** Verifica que el archivo CSS referenciado exista físicamente en disco.
   - **Scripts (`<script src="...">`):** Verifica la existencia física de los módulos JavaScript (`components.js`, `gtm.js`, etc.).
   - **Imágenes (`<img src="...">`):** Valida que el asset WebP o JPG exista en `styles/images/`.
   - **Hipervínculos (`<a href="...">`):** 
     - Resuelve rutas relativas inter-carpeta (ej: `../blog/index.html` llamado desde `casos/sigo.html`).
     - Si el enlace incluye un fragmento (ej: `index.html#casos`), consulta la matriz de IDs del archivo de destino y certifica que el elemento `#casos` realmente exista.

### Módulo 3: Validación Estricta de Datos Estructurados (Schema.org JSON-LD)
* **Extracción de Bloques:** Localiza todos los nodos `<script type="application/ld+json">`.
* **Parser JSON:** Detecta de forma temprana errores fatales como comas al final de listas, comillas mal cerradas o caracteres de escape ilegales.
* **Validación de Esquema:** Confirma que el `@context` sea `https://schema.org` y que las entidades declaradas correspondan a tipos reconocidos (`Person`, `ProfessionalService`, `ProfilePage`, `TechArticle`, `FAQPage`, etc.).

### Módulo 4: Infraestructura GEO / AEO & Rastreadores de IA
Audita la infraestructura de indexación agéntica requerida por SearchGPT, Claude, Gemini y Perplexity:
* **`robots.txt`:** Certifica que exista en la raíz, que declare la ruta del `Sitemap:` y que contenga directivas claras para rastreadores de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
* **`sitemap.xml`:** Extrae cada entrada `<loc>` y valida matemáticamente que la página correspondiente exista físicamente en el repositorio.
* **`llms.txt`:** Certifica la existencia del manifiesto agéntico en Markdown puro y valida que cuente con suficiente densidad semántica (> 200 caracteres de contenido estructurado).

### Módulo 5: Higiene de Estilos & Paridad de Entornos
* **Paridad CSS:** Compara el tamaño en bytes y contenido de `styles/human.css` (entorno de edición) contra `styles/human.min.css` (entorno de producción). Si existe una discrepancia mayor a 50 bytes, se emite una advertencia de desincronización.
* **Detección de Enlaces Huérfanos:** Rastrea y alerta sobre enlaces que contengan `href="#"` sin destino específico asignado.

---

## 🛠️ 5. Hallazgos Reales y Correcciones Implementadas

En la fase de diagnóstico inicial, la suite detectó y permitió resolver fallos reales antes de que alcanzaran producción:

| # | Archivo Afectado | Fallo Detectado por la Suite | Tipo de Error | Corrección Implementada |
|:---:|:---|:---|:---:|:---|
| **1** | [`contacto.html`](file:///c:/TGPN/web-infodumper/contacto.html) | Ausencia de etiqueta `<h1>` (tenía `<h2>` en su lugar). | Jerarquía SEO | Se elevó el titular principal a `<h1>`, restaurando la jerarquía semántica. |
| **2** | [`blog/index.html`](file:///c:/TGPN/web-infodumper/blog/index.html) | 4 enlaces en el aside apuntaban a subpáginas inexistentes (`arquitectura.html`, etc.). | Error 404 Silencioso | Se reorientaron los enlaces hacia las secciones activas correspondientes en `index.html#skills`. |
| **3** | [`recursos/`](file:///c:/TGPN/web-infodumper/recursos/) | Nuevas guías y documentos PDF agregados. | Enlaces no verificados | La suite validó que `guia-geo-madurez-agentica.html`, `guia-gtm-medicion-web.html` y los PDFs asociados existan en disco. |
| **4** | [`styles/human.min.css`](file:///c:/TGPN/web-infodumper/styles/human.min.css) | Desfase tras agregar los estilos del bloque Kaizuna. | Higiene CSS | Se sincronizó byte a byte el archivo minificado con `human.css`. |

---

## 🚀 6. Automatización de Integración Continua (CI/CD)

Para garantizar que ningún desarrollador, asistente de IA o colaborador suba código roto al repositorio, la suite se integró en **GitHub Actions**:

### Archivo: `.github/workflows/qa.yml`
```yaml
name: Automated QA & Integrity Audit

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
  workflow_dispatch:

jobs:
  qa-audit:
    name: Run QA Suite
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.13'

      - name: Execute QA Test Suite
        run: |
          python tests/qa_suite.py --verbose
```

### Regla de Calidad:
> Si un solo test falla (por ejemplo, un enlace roto `404` o un JSON-LD mal formateado), el job termina con **código de error 1**, bloqueando el pull request o alertando del fallo en el commit inmediatamente.

---

## 📈 7. Resultados Finales de la Ejecución

Al ejecutar la suite en la versión definitiva de `infodumper.net`:

```text
======================================================
🔎 INICIANDO SUITE DE QA AUTOMATIZADA — INFODUMPER.NET
Archivos HTML auditados: 13
======================================================

1. Evaluando SEO, Accesibilidad & Metadatos HTML...
2. Verificando Integridad de Enlaces Internos & Assets...
3. Validando Datos Estructurados Schema.org (JSON-LD)...
4. Verificando Infraestructura de Rastreo & Agentes (GEO / AEO)...
5. Comprobando Higiene y Sincronización CSS...

======================================================
📊 RESUMEN DE EJECUCIÓN QA
Total de comprobaciones : 335
Comprobaciones exitosas  : 335
Comprobaciones fallidas  : 0
Advertencias detectadas  : 33 (Metadatos secundarios de subpáginas)
======================================================

🎉 TODOS LOS TESTS PASARON EXITOSAMENTE. SISTEMA 100% OPERATIVO.
```

---

## 💡 8. Lecciones Aprendidas & Recomendaciones para Arquitectos

1. **La velocidad no compensa la fragilidad:** Una página web puede cargar en 200 ms, pero si sus enlaces internos devuelven error 404 o su Schema.org no parsea, su valor de negocio se degrada de inmediato.
2. **Testing sin fricción:** Implementar suites en Python puro sin dependencias pesadas permite correr 335 comprobaciones en 800 milisegundos, tanto en local como en CI/CD, eliminando la pereza de testear antes de cada commit.
3. **GEO (Generative Engine Optimization) exige rigor sintáctico:** Los rastreadores de Inteligencia Artificial (Perplexity, SearchGPT) no toleran errores de parseo en JSON-LD ni en `llms.txt`. La automatización del QA es la única forma de garantizar una indexación agéntica impecable.
4. **Soberanía y simplicidad técnica:** No hace falta sobrecargar la infraestructura con decenas de herramientas SaaS externas para auditar la integridad de una plataforma web.
