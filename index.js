require('dotenv').config()
const express = require('express')
const crypto = require('crypto')
const cors = require('cors')
const Person = require('./models/person')
const app = express()
const morgan = require('morgan')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('body', (req,res) =>  JSON.stringify(req.body))
app.use(
	morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

app.get('/api/persons', (request, response) => {
	Person.find({}).then(persons => {
		response.json(persons)
	})
})

app.get('/api/persons/:id', (request, response) => {
	Person.findById(request.params.id).then( person => {
		response.json(person)
	})
/* TODO:   deal will not found
	if (person) 
		response.json(person)
	else 
		response.status(404).end()
*/
})

app.post('/api/persons', (request, response) => {
	const body = request.body
	let badRequest = []

	if(!body.name)
		badRequest = badRequest.concat({error: 'name missing'})
	if(!body.number)
		badRequest = badRequest.concat({error: 'number missing'})
	/*
	if(persons.some(p => p.name===body.name))
		badRequest = badRequest.concat({error: 'name must be unique'})
	*/

	if (badRequest.length)
		return response.status(400).json(badRequest)

	const person = new Person({
		name: body.name,
		number: body.number,
	})

	person.save().then(savedPerson => {
		response.json(savedPerson)
	})
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})
/*
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})
*/

app.get('/info', (request, response) => {
	const msg = `Phonebook has info for ${Person.length} people<br /><br />${new Date()}`
	response.send(msg)
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})