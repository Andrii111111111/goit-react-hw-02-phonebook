
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { Component } from "react";
import { ContactList } from './ContactList/ContactList';


export class App extends Component {

  state = {
    contacts: [],
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
    // eslint-disable-next-line array-callback-return
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



