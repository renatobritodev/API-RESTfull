// CONFIGURAÇÃO INICIAL
import express, { urlencoded, json } from 'express'
import personRoutes from './routes/personRoutes'
import { connect } from 'mongoose'
require('dotenv').config()
const app = express()

// FORMA DE LER JSON // MIDDLEWARES
app.use(
  urlencoded({
    extended: true
  })
)

app.use(json())

// ROTAS DA API
app.use('/person', personRoutes)

// ROTA INICIAL / ENDPOINT
app.get('/', (req, res) => {
  // MOSTRAR REQUISIÇÃO
  res.json({ message: 'Oi Express!' })
})

// ENTREGAR UMA PORTA
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.abpetub.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))