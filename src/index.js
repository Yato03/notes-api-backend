const express = require('express')
const cors = require('cors')

const app = express()
// CONFIGURACION DEL CORS
app.use(cors())
// UTILIZAR EL JSON PARSER DE EXPRESS
app.use(express.json())

let notes = [
  {
    id: 1,
    content: 'Limpiar el polvo',
    date: '2019-08-30T09:00:00.000Z',
    important: true
  },
  {
    id: 2,
    content: 'Pasar la mopa',
    date: '2019-05-30T09:00:00.000Z',
    important: false
  },
  {
    id: 3,
    content: 'Merendar',
    date: '2019-07-30T09:00:00.000Z',
    important: false
  },
  {
    id: 4,
    content: 'Estudiar',
    date: '2019-02-30T09:00:00.000Z',
    important: true
  }
]

// RAIZ
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// VER TODAS LAS NOTAS
app.get('/api/notes', (req, res) => {
  res.json(notes)
})

// GET
// VER SOLO UNA NOTA
app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id
  const note = notes.find(note => note.id === Number(id))
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

// DELETE
// BORRAR UNA NOTA
app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id
  notes = notes.filter(note => note.id !== Number(id))
  res.json(notes)
})

// POST
// CREAR UNA NOTA

app.post('/api/notes', (req, res) => {
  const note = req.body

  if (!note || !note.content) {
    res.status(400).json({ error: 'Error en la request' })
  }

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    content: note.content,
    date: new Date().toISOString(),
    important: typeof note.important !== 'undefined' ? note.important : false
  }
  notes = notes.concat(newNote)
  res.json(newNote)
})

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})
