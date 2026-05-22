import ContactEntry from "./ContactEntry"

const Persons = (props) => {
  return (
    <div>
      {props.filteredContacts.map(person => 
        <ContactEntry key={person.id} contact={person}/>
      )}
    </div>
  )
}

export default Persons