import express from 'express'

const app = express()

app.use(express.json())

// MOCK
const teams = [
  { id: 1, team: 'Brasil', group: 'G' },
  { id: 2, team: 'Suíça', group: 'G' },
  { id: 3, team: 'Sérvia', group: 'G' },
  { id: 4, team: 'Camarões', group: 'G' },
]

app.get('/', (req, res) => {
  res.send('Curso de NodeJS')
})

app.get('/teams', (req, res) => {
  res.status(200).send(teams)
})

app.post('/teams', (req, res) => {
  teams.push(req.body)
  res.status(201).send('Seleção cadastrada com sucesso!')
})

export default app
