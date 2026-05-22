import { useState } from 'react'
import ContactEntry from './components/ContactEntry'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      id: 1,
      name: 'Arto Hellas',
      number: '040 555 5555'
    },
    {
      id: 2,
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    },
    {
      id: 3,
      name: 'Dan Abramov',
      number: '12-43-234345'
    },
    {
      id: 4,
      name: 'Mary Poppendieck',
      number: '39-23-6423122'
    }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    console.log('New contact: ', event.target)

    if (persons.find(person => person.name === newName)){
      console.log('sama löytyi')
      alert(`${newName} is already added to phonebook.`) 
    } else {
      const newContact = 
      {
        id: String(persons.length + 1),
        name: newName,
        number: newNumber
      } 

      setPersons(persons.concat(newContact))
    }
    
    setNewName('')
    setNewNumber('')
  }

  const filteredContacts = newFilter !== ''
  ? persons.filter(function(person) {
    return person.name.toLowerCase().includes(newFilter.toLowerCase())})
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={newFilter} filterHandler={handleNewFilter}/>
      <h2>Add new</h2>
        <PersonForm onSubmit={addContact} name={newName} nameHandler={handleNewName}
          number={newNumber} numberHandler={handleNewNumber}/>
      <h2>Numbers</h2>
        <Persons filteredContacts={filteredContacts}/>
    </div>
  )

}

export default App