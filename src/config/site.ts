// Numéro WhatsApp au format international, sans "+" ni espaces.
// Ex. Congo Brazzaville : 242061234567
export const WHATSAPP_NUMBER = "242066456609";

export const PRODUCT = {
  name: "Poudre de Moringa Oleifera",
  weight: "90 g",
  price: "3 300 F CFA",
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_ORDER_MESSAGE = `Bonjour, je souhaite commander la Poudre de Moringa Oleifera (sachet de 90 g – 3 300 F CFA).`;
