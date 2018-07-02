const prod = process.env.NODE_ENV === 'production';

module.exports = {
  BASE_API: 'https://toviservicios.azurewebsites.net/',
  PRODUCTION: process.env.NODE_ENV === 'production',
  BASE_DOMAIN: '.tovi.com.ar',
  TOURS_API: 'http://tours.tovi.com.ar/',
};
