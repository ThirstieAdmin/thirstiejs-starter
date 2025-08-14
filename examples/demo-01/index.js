import { initApp } from '@thirstie/ecomm-vue';
import '@thirstie/ecomm-vue/dist/thirstiebase.css';

/* public Thirstie API key, provided by your Thirstie representative */
const apiKey = process.env.THAPIKEY;

/* Google maps key: please provision your own for production */
const mapsKey = process.env.THMAPSKEY;

/* Set environment: defaults to 'sandbox' */
const thirstieEnvironment = process.env.THENV || 'sandbox';

const thirstieAppConfig = {
  APIKEY: apiKey,
  MAPSKEY: mapsKey,
  environment: thirstieEnvironment,
  experimental: true,
  primaryColor: '#154D5B',
  primaryContrastingColor: '#f0f0f0',
  secondaryColor: '#f0f8f8',
  secondaryContrastingColor: '#0f0f0f',
  brandLogo: 'https://media.thirstie.cloud/content/2Dt1hdN5CDkHNn7UBCQ5yH,x250f.png',
  routes: {
    checkout: '/checkout.html'
  },
  supportEmail: 'technology@thirstie.com',
  plpAddressInput: 'Delivery address to see product availability',
  pdpAddressDisclaimer: 'Address to check retailer availability and price',
  pdpFAQName: 'Delivery Information',
  cartTitle: 'My Bag',
  emptyCartMsg: 'Your bag is empty',
  footerMsg: 'This site is for demonstration purposes only, Tequila Brand and Thirstie are not a licensed beverage alcohol retailer. All sales of alcohol are fulfilled by licensed retailers on the Thirstie Network.',
  faqContent: `
    <h3>Frequently Asked Questions</h3>
    <p><strong>Q: What is this product?</strong></p>
    <p>A: This is a high-quality product designed for customer satisfaction.</p>
    <p><strong>Q: How do I use it?</strong></p>
    <p>A: Simply follow the instructions provided in the manual.</p>
  `
};

globalThis.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_OPTIONS_API__ = false;
initApp(thirstieAppConfig);
