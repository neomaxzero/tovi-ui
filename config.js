const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'BASE_API': prod ? 'https://toviservicios.azurewebsites.net/' : 'http://localhost:8882/',
  'PRODUCTION': process.env.NODE_ENV === 'production',
  'BASE_DOMAIN': '.tovi.com.ar',
}
