import ContactEntry from "./ContactEntry"

const Persons = ({filteredContacts, deleteContact}) => {

  return (
    <div>
      {filteredContacts.map(person => 
        <div key={person.id}>
        <ContactEntry contact={person}/>
        <button onClick={() => deleteContact(person.id, person.name)}>DELETE</button>
        </div>
      )}
    </div>
  )
}

export default Persons