import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import contactService from './services/contacts'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState({type: null, text: null})

  useEffect(() => {
      contactService
        .getAll()
        .then(contacts => setPersons(contacts))
  }, [])
  
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
      // console.log('sama löytyi')
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        {
          const p = persons.find(p => p.name === newName) 
          const pID = p.id

          const updatedContact =
            {
              name: newName,
              number: newNumber,
              id: pID
            } 

          console.log(updatedContact)
          updateContact(updatedContact)
        } 
    } else {
      const newContact = 
      {
        // id: String(persons.length + 1),
        name: newName,
        number: newNumber
      } 

      contactService
        .create(newContact)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
        })

        setMessage({
          type: 'notification',
          text: `Added ${newName}`
        })
        setTimeout(() => {
          setMessage({type: null, text: null})
        }, 5000)
    }
    
    setNewName('')
    setNewNumber('')
  }

  const deleteContact = (id, name) => {
    if (window.confirm(`Delete ${name}?`)){ // palauttaa booleanin
      contactService
        .remove(id)
        .then(() => 
          setPersons(persons.filter(person => person.id !== id)))
      
      setMessage({
        type: 'notification',
        text: `Deleted ${name}`
      })
      setTimeout(() => {
        setMessage({type: null, text: null})
      }, 5000)
    }
  }

  const updateContact = (contactObj) => {
    contactService
      .update(contactObj)
      .then(returnedNote => { 
        setPersons(persons.map(p => p.id !== contactObj.id ? p : contactObj))
        setMessage({
          type: 'notification',
          text: `Updated ${contactObj.name}`
        })
      })
      .catch(error => {
        setMessage({
          type: 'error',
          text: `Information of ${contactObj.name} has already been removed from server`
        })
        
        setPersons(persons.filter(p => p.id !== contactObj.id))
      })

    setTimeout(() => {
      setMessage({type: null, text: null})
    }, 5000)
  }

  const filteredContacts = newFilter !== ''
  ? persons.filter(function(person) {
    return person.name.toLowerCase().includes(newFilter.toLowerCase())})
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
        <Filter filter={newFilter} filterHandler={handleNewFilter}/>
      <h2>Add new</h2>
        <PersonForm onSubmit={addContact} name={newName} nameHandler={handleNewName}
          number={newNumber} numberHandler={handleNewNumber}/>
      <h2>Numbers</h2>
        <Persons filteredContacts={filteredContacts} deleteContact={deleteContact}/>
    </div>
  )

}

export default App