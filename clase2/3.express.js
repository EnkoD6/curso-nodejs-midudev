const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//     console.log('Middleware')
//     //en un middleware puedes trackear la request a la bbdd, revisar si el usuario tiene cookies, etc
//     next()
// })

app.get('/', (req, res) => {
    res.send('<h1>Mi página</h1>') //landing page
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`) //log que indica en que puerto esta la app
})

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>') //pagina de error en caso de intentar acceder a una url que no existe
})