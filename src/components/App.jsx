import { Form } from "./Form/Form";
import { Component } from "react";


export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  }
  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]:evt.currentTarget.value})
}


  handleSubmit = evt => {
    evt.preventDefault()
   console.log(this.state)
  }
    


  render() {
   
  return (
   
    <>
      <Form hanSub={this.handleSubmit}
      hanChe= {this.handleChange}
      />
      
    </>)

}
}



