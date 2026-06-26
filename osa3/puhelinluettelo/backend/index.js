const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.static('dist'))
app.use(express.json())

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use(cors())

let persons = [
    {
      "name": "Arto Hellas",
      "number": "040 555 5512",
      "id": "1"
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-533555",
      "id": "2"
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": "3"
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": "4"
    }
  ]

function getRandomId(){
    const randInt = Math.floor(Math.random() * 100000)
    return randInt.toString()
}

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id === id)

    if (person){
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    const datetimeNow = new Date()

    const content = (
        `<p>Phonepook has info for ${persons.length} people.</p>
         <p>${datetimeNow.toString()}</p>`
    )
    response.send(content)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id

    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    // console.log(body)
    const nameExists = persons.some(p => p.name === body.name)
    // console.log(nameExists)

    if (!body.name || !body.number){
        return response.status(400).json({
            error: 'Either name or number missing.'
        })
    } else if (nameExists){
        return response.status(400).json({
            error: 'Name must be unique.'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: getRandomId()
    }

    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)