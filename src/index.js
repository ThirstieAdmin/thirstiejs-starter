import { initApp } from '@thirstie/ecomm-vue';
import '@thirstie/ecomm-vue/dist/thirstiebase.css';
import './styles.css';

/* public Thirstie API key, provided by your Thirstie representative */
const apiKey = process.env.THAPIKEY;

/* Google maps key: please provision your own for production */
const mapsKey = process.env.THMAPSKEY;

/* Set environment: defaults to 'sandbox' */
const thirstieEnvironment = process.env.THENV || 'sandbox';

/* boilerplate for vuejs */
globalThis.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_OPTIONS_API__ = false;

const thirstieAppConfig = {
  APIKEY: apiKey,
  MAPSKEY: mapsKey,
  experimental: false,
  environment: thirstieEnvironment,
  // other configuration settings unchanged from sandbox environment
  primaryColor: '#154D5B',
  secondaryColor: '#ffffff',
  /* Replace with your desired logo
     NOTE: Thirstie can host your branding assets via our Asset Service CDN,
           which enables dynamic asset re-sizing and caching.
  */
  brandLogo: 'https://media.thirstie.cloud/banners/rX6jSPAvjDpeEy5acMQ9GB,x250f.png',
  routes: {
    checkout: '/checkout.html',
    shopping: '/'
  },
  /* NOTE: A production customer service email will be provided */
  supportEmail: 'support@email.com'
};

/* initialize Thirstie E-Commerce Components */
initApp(thirstieAppConfig);
