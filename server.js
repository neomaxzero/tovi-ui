const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server_port = process.env.PORT || 3000;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.prepare()
.then(() => {
  const server = express();
  // createServer((req, res) => {
  //   const parsedUrl = parse(req.url, true)
  //   const { pathname, query } = parsedUrl

  //   handle(req, res, parsedUrl)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(server_port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${server_ip_address}:${server_port}`)
  })
})