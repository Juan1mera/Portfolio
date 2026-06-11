// Anti-scraping: el correo nunca aparece como texto literal en el código
// fuente ni en el bundle compilado. Se ensambla en runtime a partir de
// códigos de carácter, por lo que los extractores de emails (que buscan
// patrones tipo xxx@yyy.zzz en HTML/JS estático) no pueden encontrarlo.
const CODES = [
  109, 101, 114, 97, 46, 100, 101, 118, 46, 99, 111, // mera.dev.co
  64,                                                 // @
  103, 109, 97, 105, 108, 46, 99, 111, 109,           // gmail.com
];

export const getEmail = (): string => String.fromCharCode(...CODES);

// Abre el cliente de correo sin que exista un href="mailto:..." en el DOM
export const openMailto = (): void => {
  window.location.href = `mailto:${getEmail()}`;
};
