const getCredentials = () => {

  fetch("https://js.thirstie.cloud/docs/democredentials.json").then(response => {
      return response.json();
  }).then(data => {
      const { APIKEY, MAPSKEY, THENV } = data;
      window.thirstieEcommVue.initApp({
          APIKEY: APIKEY,
          MAPSKEY: MAPSKEY,
          environment: THENV,
          experimental: false,
          featureFlags: {
              engraving: false
          },
          primaryColor: '#154D5B',
          secondaryColor: '#f0a0a0',
          primaryContrastingColor: '#fff',
          secondaryContrastingColor: '#000',
          routes: {
              checkout: '/checkout.html',
              shopping: '/'
          },
          brandLogo:
              'https://media.thirstie.cloud/content/2Dt1hdN5CDkHNn7UBCQ5yH,x250f.png'
      });

  }).catch(err => {
      console.error(err);
  });
}

globalThis.__VUE_PROD_DEVTOOLS__ = false;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
globalThis.__VUE_OPTIONS_API__ = false;
getCredentials();
