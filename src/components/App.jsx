
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { Component } from "react";
import { ContactList } from './ContactList/ContactList';


export class App extends Component {

  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ''
  }
  
  deleteContacs = (id) => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id !== id)
    }))
  }

  chengeFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  formSubmitEnd = data => {
    if (this.state.contacts.find(({name}) => 
      name.toLowerCase() === data.name.toLowerCase()))
    {
      alert(`${data.name} is already in contacts.`);
      return;
    }
       this.setState(prevState => ({ contacts: [...prevState.contacts, { ...data, id: nanoid() }] })) 
    }
  
  
  render() {
   
    const { contacts, filter } = this.state
    const contactFilter = contacts.filter(contact => {
        if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
          return contact
        }
    })
  
  return (
   
    <>
      <Form onSubmit={this.formSubmitEnd}/>
      <ContactList contacts={contactFilter}
        filter={filter}
        onChengeFilter={this.chengeFilter}
        deleteCon = {this.deleteContacs}
      />
    </>)

}
}



