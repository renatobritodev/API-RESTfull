import { Express, Router } from 'express'
import { create, find, findOne, updateOne, deleteOne } from '../models/Person'

// CREATE - CRIA DADOS
Router.post('/', async (req, res) => {
  // req.body
  const { name, salary, approved } = req.body

  if (!name) {
    res.status(422).json({ error: 'O nome é obrigatório.' })
    return
  }

  const person = { name, salary, approved }

  try {
    // CRIANDO DADOS
    await create(person)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ error: 'Oops! Algo deu errado!' })
  }
})

// READ - LEITURA DE DADOS
Router.get('/', async (req, res) => {
  try {
    const people = await find()
    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

Router.get('/:id', async (req, res) => {
  // EXTRAIR O DADO DA REQUISIÇÃO, PELA URL = req.params
  const id = req.params.id

  try {
    const person = await findOne({ _id: id })

    if (!person) {
      res.status(422).json({ message: 'Usuário não foi encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

// UPDATE - ATUALIZAÇÃO DE DADOS (PUT, PATCH)
Router.patch('/:id', async (req, res) => {
  const id = req.params.id
  const { name, salary, approved } = req.body
  const person = {
    name,
    salary,
    approved,
  }

  try {
    const updatePerson = await updateOne({ _id: id }, person)

    if (updatePerson.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não foi encontrado!' })
      return
    }

    res.status(200).json(person)
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

// DELETE - DELETAR DADOS
Router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const person = await findOne({ _id: id })

  if (!person) {
    res.status(422).json({ message: 'Usuário não foi encontrado!' })
    return
  }

  try {
    await deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})
