/** Central contact config, update these before launch. */
export const WHATSAPP_DISPLAY = "0746330768";
export const WHATSAPP_INTL = "254746330768";
export const CONTACT_EMAIL = "Lexochieng11@gmail.com";
export const LOCATION = "Nairobi, Kenya";
export const BOOKING_URL = "https://cal.com/lex-ochieng-l3x-e9bzld/15min";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}