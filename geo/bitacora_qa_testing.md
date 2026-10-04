# 🧪 Bitácora Técnica: Suite de QA y Validación Estática Automatizada

> **Registro técnico de diseño, alcance, limitaciones y resultados de la suite de pruebas internas para [infodumper.net](https://infodumper.net).**  
> **Autor:** Ignacio Vizoso (Infodumper) — *Arquitecto de Software, Consultor de Procesos & Sistemas de IA*  
> **Metodología:** Procesos → Datos → Software → Automatización → IA  
> **Versión:** 2.0 (Revisión técnica y metodológica)

---

## 📊 1. Resumen Ejecutivo & Estado Actual

| Parámetro | Valor | Detalle Técnico |
|:---|:---:|:---|
| **Comprobaciones Realizadas** | **351** | Aserciones unitarias sobre la estructura de archivos en disco. |
| **Comprobaciones Exitosas** | **351** | Cero errores bloqueantes en la ejecución actual. |
| **Errores Bloqueantes (Fails)** | **0** | Sin enlaces locales rotos, sin fallos de sintaxis JSON-LD y con jerarquía H1 consistente. |
| **Advertencias Informativas (Warns)** | **33** | Subpáginas secundarias (`blog/`, `casos/`, `soluciones/`, `recursos/`) con metadatos Open Graph incompletos o sin bloque JSON-LD dedicado. |
| **Estado de Minificación CSS** | **Sincronizado** | `human.min.css` (37.1 KB) generado de forma determinista desde `human.css` (50.2 KB), logrando un 26% de reducción. |
| **Tiempo de Ejecución** | **~0.8 segundos** | Suite local y en CI sin sobrecarga de runtime. |
| **Runtime & Dependencias** | Python 3.13 (CI) / 3.10+ (Local) | Librería estándar exclusivamente (`html.parser`, `urllib`, `pathlib`, `json`, `xml`). Cero dependencias en `node_modules`. |
| **Integración Continua** | GitHub Actions (`qa.yml`) | Ejecución en cada `push` y `pull_request` con `permissions: contents: read`. |

---

## ⚡ 2. El Problema: Fragilidad Silenciosa en Plataformas Estáticas

En arquitecturas web estáticas construidas con HTML5 semántico, Vanilla CSS y Web Components nativos, prescindir de frameworks pesados aporta velocidad y simplicidad operativa. Sin embargo, surge un mito frecuente: suponer que una web estática no requiere pruebas continuas.

La experiencia demuestra que las webs estáticas sufren una degradación silenciosa fácil de pasar por alto:

* **Enlaces locales rotos (404s en disco):** Al reorganizar carpetas (`blog/`, `casos/`, `recursos/`), una discrepancia en rutas relativas (`./` frente a `../`) genera enlaces muertos que los editores convencionales no detectan.
* **Anclas fragmentadas (`#id` huérfanas):** Botones de navegación o llamadas a la acción que apuntan a `#skills` o `#casos` después de que el elemento destino fue renombrado o eliminado del DOM.
* **Datos estructurados inválidos (Schema.org):** Un error de sintaxis en un bloque JSON-LD (como una coma final sobrante) provoca que Google, ChatGPT Search o Perplexity ignoren por completo las entidades declaradas, perdiendo la oportunidad de enriquecer la indexación.
* **Fallas jerárquicas de SEO y accesibilidad:** Omitir el encabezado `<h1>`, duplicar la etiqueta `<main>` o carecer del atributo `alt` en imágenes.
* **Desfase de estilos:** Editar la hoja de estilos de desarrollo (`human.css`) y olvidar regenerar la versión minificada para producción (`human.min.css`), provocando que los cambios no se reflejen en los usuarios finales.

---

## 🎯 3. Alcance y Limitaciones: Qué Cubre y Qué NO Cubre

Para mantener una evaluación técnica honesta, es fundamental delimitar con claridad el alcance de esta suite frente a herramientas de testing dinámico más pesadas:

```
┌───────────────────────────────────────────────┬───────────────────────────────────────────────┐
│              QUÉ CUBRE ESTA SUITE             │             QUÉ NO CUBRE (FUERA DE ALCANCE)   │
├───────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ • Existencia física en disco de CSS, JS,      │ • Comportamiento dinámico de JavaScript       │
│   imágenes y documentos HTML enlazados.       │   (eventos clic, lógica de estado, modales).  │
│ • Resolución de anclas locales y remotas      │ • Validación de red en enlaces externos       │
│   (#id) presentes en el marcado estático.     │   (no hace llamadas HTTP a sitios terceros).  │
│ • Enlaces declarados en plantillas de         │ • Envío, validación ni endpoints del          │
│   Web Components (scripts/components.js).     │   formulario (#contact-form).                 │
│ • Sintaxis JSON y estructura Schema.org.      │ • Medición de Core Web Vitals, velocidad de   │
│ • Presencia del atributo alt en imágenes.     │   renderizado ni rendimiento (Lighthouse).    │
│ • Paridad y minificación exacta entre         │ • Accesibilidad profunda (contraste cromático,│
│   human.css y human.min.css.                  │   árbol de accesibilidad para lectores).      │
│ • Consistencia entre sitemap.xml y archivos   │ • Atributos srcset ni llamadas url() en CSS.  │
└───────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

> **Propósito:** Esta suite no sustituye a herramientas especializadas como Lighthouse CI, Playwright o validadores formales de W3C. Actúa como una **primera línea de defensa ultrarrápida (< 1 s)**, con cero dependencias externas, ideal para ejecutarse localmente antes de cada commit y en GitHub Actions.

---

## ⚙️ 4. Arquitectura de la Suite (`tests/qa_suite.py`)

La herramienta se implementa en un único script de Python que utiliza exclusivamente módulos de la librería estándar:

* **Tokenización HTML (`html.parser.HTMLParser`):** Extrae etiquetas, atributos y texto secuencialmente mediante un parser SAX liviano, sin la sobrecarga de montar un navegador headless ni construir un árbol DOM complejo.
* **Resolución de Rutas (`pathlib.Path` y `urllib.parse`):** Resuelve algebraicamente las rutas relativas en disco respecto a la ubicación del archivo emisor, verificando la existencia real del asset o subpágina.
* **Validación de Datos Estructurados (`json`):** Intenta parsear cada bloque `<script type="application/ld+json">`. Si el parser de Python arroja `json.JSONDecodeError`, la prueba falla de inmediato reportando la línea y el error exacto.
* **Auditoría XML (`xml.etree.ElementTree`):** Parsea `sitemap.xml`, extrae las etiquetas `<loc>` y verifica que cada URL canónica declarada tenga su archivo físico en el repositorio.
* **Minificación Determinista (`re`):** Normaliza y minifica `styles/human.css` eliminando comentarios y espacios redundantes, comparando el resultado string por string contra `styles/human.min.css`.

---

## 🔍 5. Desglose de los 5 Módulos de Control

### Módulo 1: Estructura HTML5, SEO Semántico & Accesibilidad
* **Título (`<title>`):** Debe existir y tener una longitud mínima descriptiva (> 8 caracteres).
* **Jerarquía de Encabezados:** Exige exactamente **un único `<h1>`** por documento. Múltiples `<h1>` o la ausencia del mismo generan un fallo.
* **Semántica:** Exactamente un único elemento `<main>` por página.
* **Accesibilidad en Imágenes (WCAG 2.1):** Comprueba que cada etiqueta `<img>` tenga el atributo `alt` definido. Se permite `alt=""` para imágenes puramente decorativas, cumpliendo con la pauta WCAG para no obligar a redactar descripciones artificiales en recursos visuales secundarios.
* **Metadatos Open Graph:** Comprueba `og:title`, `og:description`, `og:image` y `og:url`. Si faltan en la página principal se considera crítico; en subpáginas genera una advertencia de completitud.

### Módulo 2: Integridad de Enlaces y Recursos en Disco
Se ejecuta en dos fases:
1. **Recolección de Identificadores:** Escanea los 13 archivos HTML y recopila en memoria un índice de todos los `id="..."` existentes.
2. **Auditoría Cruzada:**
   * **Assets:** Comprueba que los `<link rel="stylesheet">`, `<script src="...">` e `<img src="...">` existan en disco.
   * **Hipervínculos (`<a href="...">`):** Valida que la ruta destino exista. Si incluye ancla (ej: `index.html#skills`), consulta el índice de IDs del archivo destino y verifica que el elemento exista.
   * **Web Components:** Lee `scripts/components.js`, extrae los enlaces contenidos en las plantillas del encabezado y pie modular (`site-header` y `site-footer`) y valida que apunten a rutas y anclas reales.

### Módulo 3: Validación de Schema.org JSON-LD
* Certifica que la sintaxis JSON sea válida y libre de errores de puntuación.
* Verifica que el `@context` declarado apunte a `https://schema.org`.
* Confirma la presencia de tipos reconocidos (`Person`, `ProfessionalService`, `ProfilePage`, `TechArticle`, etc.).

### Módulo 4: Infraestructura GEO / AEO & Rastreo
* **`robots.txt`:** Valida su presencia, la declaración de la directiva `Sitemap:` y la configuración explícita de directivas para rastreadores (como GPTBot, ClaudeBot o PerplexityBot).
* **`sitemap.xml`:** Confirma que cada entrada `<loc>` corresponda a un archivo HTML indexable existente en el repositorio.
* **`llms.txt`:** Verifica la presencia y densidad de contenido del manifiesto en Markdown estructurado. *Nota técnica:* `llms.txt` es una propuesta emergente de la comunidad para facilitar contexto resumido a modelos de lenguaje; su adopción por buscadores tradicionales continúa en evolución.

### Módulo 5: Higiene de Estilos & Minificación
* Genera la versión minificada de `styles/human.css` en memoria y la compara directamente con `styles/human.min.css`. Si el archivo minificado en disco no coincide de forma exacta con la versión derivada del fuente, emite una advertencia de desincronización.
* Detecta enlaces con `href="#"` residuales que no tengan un propósito interactivo asignado.

---

## 🛠️ 6. Diagnósticos Reales y Ajustes Realizados

Durante la implementación y ejecución de la suite se detectaron aspectos que requirieron intervención directa:

1. **Jerarquía en `contacto.html`:** La página utilizaba un `<h2>` como título principal. Se corrigió a `<h1>`, restableciendo la jerarquía semántica requerida por las pautas de accesibilidad y SEO.
2. **Enlaces en el lateral de `blog/index.html`:** Enlaces que apuntaban a archivos individuales inexistentes (`arquitectura.html`, `inteligencia-artificial.html`). Se reorientaron temporalmente hacia las anclas correspondientes de `index.html#skills` como solución transitoria mientras se desarrollan las publicaciones completas.
3. **Caché en Producción e Iconografía:** Tras añadir las nuevas secciones de perfil, el hosting continuó sirviendo una versión previa de la hoja de estilos debido a directivas de caché estática inmutable. Se resolvió incrementando el parámetro de versión (`?v=7`) en todos los archivos HTML y agregando las definiciones Unicode faltantes en `styles/fontawesome.min.css`.

---

## 🚀 7. Integración Continua (CI) y Consideraciones de Despliegue

La suite se ejecuta automáticamente mediante GitHub Actions configurado en `.github/workflows/qa.yml`:

```yaml
name: Automated QA & Integrity Audit

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: read

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

### ⚠️ Consideración Operativa sobre Despliegues:
* En un flujo donde se hace `push` directo a la rama `main`, el workflow de GitHub Actions se ejecuta en paralelo y notifica el resultado del commit, **pero no cancela por sí solo un despliegue automático** que el proveedor de hosting (como Vercel o Hostinger) inicie al detectar cambios en `main`.
* Para lograr un bloqueo preventivo real antes del despliegue, es necesario:
  1. Activar reglas de protección de rama (*Branch Protection Rules*) en GitHub exigiendo que el check `qa-audit` pase exitosamente (*Required Status Check*).
  2. Canalizar los cambios obligatoriamente mediante *Pull Requests* hacia `main`.
  3. O bien condicionar el despliegue del hosting al webhook de éxito del workflow de GitHub Actions.

---

## 💡 8. Conclusiones Metodológicas

1. **Rigor técnico sobre grandilocuencia:** Una suite de 350 comprobaciones estáticas es una herramienta práctica y sumamente útil para evitar descuidos tontos (un 404, un JSON inválido, un H1 faltante). No necesita adjetivos inflados para demostrar su valor.
2. **Transparencia en las limitaciones:** Documentar con honestidad lo que una herramienta no cubre refuerza la credibilidad del equipo técnico y permite complementar las pruebas estáticas con auditorías dinámicas (Lighthouse, pruebas manuales y validación de formularios).
3. **Mantenimiento del ciclo de valor:**  
   Procesos → Datos → Software → Automatización → IA.  
   Aplicar automatización al control de calidad del software cierra el ciclo metodológico, asegurando que cada entrega mantenga un estándar predecible y profesional.
