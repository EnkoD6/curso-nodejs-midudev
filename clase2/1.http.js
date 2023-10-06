const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

function processRequest (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else if (req.url === '/imagen') {
    fs.readFile('./img/captura.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    req.statusCode = 404 // Not found
    res.end('404 Not found')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
