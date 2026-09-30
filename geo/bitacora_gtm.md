# Bitácora de Implementación: Google Tag Manager (GTM)

> Registro consolidado de configuración, etiquetas, activadores (triggers) y variables implementadas a través de Google Tag Manager para **[infodumper.net](https://infodumper.net)**.

---

## 1. Matriz de Estado de Implementación

| Etiqueta / Configuración | Estado | Disparador (Trigger) | Detalle Técnico |
|:---|:---:|:---|:---|
| **Contenedor Base GTM** | ✅ Activo | Carga de página | Script principal en el `<head>` y `<noscript>` en el `<body>` de los HTMLs. |
| **Etiqueta de Google (GA4)** | ✅ Activo | All Pages (Todas las páginas) | ID de medición: `G-7X8PPK165J`. Se encarga del rastreo de visitas base. |
| **Evento GA4: Clic Redes/WhatsApp** | ✅ Activo | Clic en Solo enlaces (`Click URL` contiene wa.me, linkedin o github) | Evento: `click_social`. Parámetro `red_social` configurado dinámicamente según la URL destino. |
| **Evento GA4: Intención de Contacto** | ✅ Activo | Clic en Solo enlaces (`Click URL` contiene contacto.html) | Evento: `click_contact_link`. Parámetro `ubicacion` usa `{{Page URL}}` para saber desde qué página se hizo clic. |
| **Evento GA4: Envío de Contacto** | ✅ Activo | Envío de formulario (`Form ID` igual a contact-form) | Evento: `generate_lead` (estándar de GA4). |

---

## 2. Historial de Configuración y Cambios

### [2026-09-30] Configuración de Evento: Envío de Formulario
- Se activa la variable integrada `Form ID` en GTM.
- Se planifica la creación de un activador "Envío de formulario" interceptando el formulario principal (`#contact-form`).
- Se configura el evento estándar de conversión `generate_lead` en GA4.

### [2026-09-30] Configuración de Evento: Intención de Contacto (Clics)
- Se planifica la creación de un activador "Solo enlaces" para interceptar todos los clics dirigidos a `contacto.html`.
- Se configura el evento GA4 personalizado `click_contact_link` para medir la intención primaria de los usuarios de comunicarse, enviando la URL de origen como parámetro.

### [2026-09-30] Configuración de Evento: Clics en Redes y WhatsApp
- Se activan las variables integradas de clics en GTM (específicamente `Click URL`).
- Se planifica la creación de un activador "Solo enlaces" para interceptar salidas hacia WhatsApp, LinkedIn y GitHub.
- Se configura el evento GA4 personalizado `click_social` para nutrir los reportes de Analytics.

### [2026-09-30] Implementación Base de GA4
- Se configuró la **Etiqueta de Google (GA4)** utilizando el Measurement ID `G-7X8PPK165J`.
- Se asignó el disparador global **All Pages** para asegurar el registro de visitas en todo el sitio web.
- El contenedor principal de GTM (`GTM-PHDCTSW4`) se consolida como el único punto de inyección, evitando duplicar código de Analytics en el repositorio.

### [2026-09-30] Inicialización de la Bitácora GTM
- Se crea la bitácora para documentar metódicamente todos los eventos, variables y configuraciones relacionadas con Google Tag Manager.
