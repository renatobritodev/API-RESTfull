// CONFIGURAÇÃO INICIAL
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// FORMA DE LER JSON // MIDDLEWARES
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// ROTAS DA API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// ROTA INICIAL / ENDPOINT
app.get('/', (req, res) => {
  // MOSTRAR REQUISIÇÃO
  res.json({ message: 'Oi Express!' })
})

// ENTREGAR UMA PORTA
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.abpetub.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))