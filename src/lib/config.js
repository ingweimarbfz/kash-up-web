export const BRAND = 'KashUp'
export const TAGLINE = 'Software para negocios de préstamos y ventas a crédito'
// Dirección de la app (ingreso de los negocios) y de la página de precios para clientes.
export const APP_URL = (import.meta.env.PUBLIC_APP_URL || 'https://kash-up.vercel.app').replace(/\/$/, '')
// Contacto comercial: se cambia con PUBLIC_WHATSAPP y PUBLIC_CONTACT_EMAIL al publicar.
export const WHATSAPP = (import.meta.env.PUBLIC_WHATSAPP || '573218780142').replace(/\D/g, '')
export const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL || ''
export const demoLink = (subject = 'demostración de KashUp') => (WHATSAPP
  ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola, quiero una ${subject}.`)}`
  : `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`)
