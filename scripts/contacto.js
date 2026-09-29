/**
 * Scripts para la página de Contacto (contacto.html)
 * Cumple con CSP estricto: sin scripts inline.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Pre-seleccionar opción de desafío si viene por parámetro URL
    const params = new URLSearchParams(window.location.search);
    const desafioParam = params.get('desafio');
    if (desafioParam) {
        const selectEl = document.getElementById('desafio');
        if (selectEl) {
            const matchedOption = selectEl.querySelector(`option[value="${desafioParam}"]`);
            if (matchedOption) {
                selectEl.value = desafioParam;
            }
        }
    }
});
