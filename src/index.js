import { initApp } from '@thirstie/ecomm-vue';

/* public Thirstie API key, provided by your Thirstie representative */
const apiKey = process.env.THAPIKEY;

/* Google maps key: please provision your own for production */
const mapsKey = process.env.THMAPSKEY;

/* boilerplate for vuejs */
globalThis.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_OPTIONS_API__ = false;

const thirstieAppConfig = {
  APIKEY: apiKey,
  MAPSKEY: mapsKey,
  primaryColor: '#154D5B',
  secondaryColor: '#ffffff',
  /* Replace with your desired logo
     NOTE: Thirstie can host your branding assets via our Asset Service CDN,
           which enables dynamic asset re-sizing and caching.
  */
  brandLogo: 'https://media.thirstie.cloud/banners/rX6jSPAvjDpeEy5acMQ9GB,x250f.png',
  routes: {
    checkout: '/checkout.html'
  },
  /* NOTE: A production customer service email will be provided */
  supportEmail: 'technology@thirstie.com',
  experimental: false,
  environment: 'sandbox'
};

/* initialize Thirstie E-Commerce Components */
initApp(thirstieAppConfig);