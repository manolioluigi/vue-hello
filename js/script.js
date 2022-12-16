const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Sapevi che la durata media della vita di una lontra è di circa 10 anni? Sebbene sia stato segnalato un caso di una lontra longeva che visse fino a tarda età e morì a soli 27 balzi sul collo.' , 
        image: 'https://www.generazionepost.it/wp-content/uploads/2019/11/lontra.jpg'
      }
    }
  }).mount('#app')