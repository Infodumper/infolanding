# Bitácora de Implementación: Google Tag Manager (GTM)

> Registro técnico consolidado de configuración, etiquetas, activadores (*triggers*), variables y diagnóstico de depuración implementados mediante Google Tag Manager para **[infodumper.net](https://infodumper.net)**.

---

## 1. Ficha Técnica del Contenedor

| Parámetro | Valor |
|:---|:---|
| **ID del Contenedor GTM** | `GTM-PHDCTSW4` |
| **ID de Medición GA4** | `G-7X8PPK165J` |
| **Dominio Principal** | `https://infodumper.net` |
| **Inyección en Frontend** | Snippet `<head>` y `<noscript>` en el `<body>` de todos los archivos HTML (11 páginas). |
| **Compatibilidad CSP** | Directivas `script-src` y `connect-src` en `.htaccess` y `vercel.json` configuradas para permitir tráfico con `googletagmanager.com` y `google-analytics.com`. |

---

## 2. Matriz de Estado de Implementación

| Etiqueta / Configuración | Estado | Disparador (Trigger) | Parámetros del Evento | Detalle Técnico |
|:---|:---:|:---|:---|:---|
| **Contenedor Base GTM** | ✅ Activo | Carga de página (*Container Loaded*) | — | Inyección asíncrona unificada que centraliza toda la analítica sin tocar el código fuente del sitio. |
| **Etiqueta de Google (GA4)** | ✅ Activo | Todas las páginas (*All Pages*) | — | ID de medición: `G-7X8PPK165J`. Rastreo base de visualización de páginas (*page_view*). |
| **Evento GA4: Clic Redes / Canales** | ✅ Activo | Solo enlaces (`Click URL` contiene `wa.me`, `linkedin.com`, `github.com` o `instagram.com`) | `red_social`: `{{Click URL}}` | Evento personalizado `click_social`. Mide el abandono cualificado hacia redes profesionales y WhatsApp. |
| **Evento GA4: Intención de Contacto** | ✅ Activo | Solo enlaces (`Click URL` contiene `contacto.html`) | `ubicacion`: `{{Page URL}}` | Evento personalizado `click_contact_link`. Mide el interés previo de conversión antes de llenar el formulario. |
| **Evento GA4: Envío de Contacto** | ✅ Activo | Envío de formulario (`Form ID` coincide con `contact-form`) | `method`: `web_form` | Evento estándar de GA4 `generate_lead` para registrar conversiones finales completadas. |

---

## 3. Diagnóstico y Validación en Google Tag Assistant

Durante las pruebas de depuración mediante **Tag Assistant (Preview Mode)**, es fundamental tener en cuenta los siguientes comportamientos esperados:

### A. Disparo de Eventos Salientes (*Outbound Links*)
- Cuando se hace clic en un enlace a WhatsApp, LinkedIn, GitHub o Instagram, Tag Assistant registra el evento `click_social` correctamente en el historial del contenedor de `infodumper.net`.
- **Aviso "No tag found" en dominios de destino:** Al abrirse el enlace externo (ej. LinkedIn o Instagram) en una nueva pestaña vinculada, el asistente intenta buscar el contenedor `GTM-PHDCTSW4` en ese dominio externo. Al no existir allí, Tag Assistant reporta que no encontró etiquetas en esa pestaña. **Esto es 100% normal y esperado**, ya que el evento ya fue emitido y capturado por el sitio propio antes de la navegación.

### B. Bloqueo de Content Security Policy (CSP) en GitHub
- Al probar clics hacia perfiles de GitHub (`github.com/Infodumper`), Tag Assistant puede mostrar un mensaje de error indicando violación de CSP.
- **Causa:** GitHub implementa una estricta política de seguridad propia que rechaza la ejecución de scripts externos de depuración (`tagassistant.google.com`) dentro de su dominio.
- **Impacto:** Nulo en el sitio web `infodumper.net`. La señal de clic ya fue procesada por Tag Manager en la sesión de origen.

---

## 4. Historial Cronológico de Cambios

### [2026-09-30] Configuración y Validación Integral de Eventos
- **Activación de Variables Integradas:** Se habilitaron `Click URL`, `Click Text`, `Form ID` y `Page URL` dentro de GTM.
- **Evento `click_social`:** Configurado el disparador de tipo "Solo enlaces" con reglas de coincidencia para WhatsApp (`wa.me`), LinkedIn (`linkedin.com`), GitHub (`github.com`) e Instagram (`instagram.com`).
- **Evento `click_contact_link`:** Configurado para monitorear todos los accesos dirigidos hacia la página `contacto.html`.
- **Evento `generate_lead`:** Vinculado al identificador DOM `#contact-form` para medir la conversión sin recargar la página.
- **Validación en Vivo:** Se realizaron pruebas con Tag Assistant verificando el correcto envío de eventos a GA4 y el paso de parámetros asociados.

### [2026-09-30] Despliegue del Contenedor Base
- Inyección del código oficial de Tag Manager en los encabezados y cuerpos de las 11 páginas que componen el sitio.
- Vinculación del Measurement ID de Google Analytics 4 `G-7X8PPK165J` bajo el disparador global *Initialization / All Pages*.

