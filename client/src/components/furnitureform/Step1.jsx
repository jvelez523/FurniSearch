import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Step1 extends Component {

  state = {
    roomname: '',
    roomdesc: ''
  }

  handlenameChange = (name) => {
    console.log(name.target.value)
    this.setState({
     roomname: name.target.value
    })
  } 

  handledescChange = (desc) => {
    console.log(desc.target.value)
    this.setState({
     roomdesc: desc.target.value
    })
  } 

  componentDidMount(){
    console.log("step 1",this.state)
  }


  render() {
    return (
      <div className="center">
          <Form.Group controlId="formRoomName">
            <Form.Label>Room Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the room this furtniture is in" className="center forminputs shadow-sm" required  value={this.props.roomname}
        onChange={this.props.handleChange} name="roomname"/>
            <Form.Text className="text-muted">
              This will be th name that is shown to other users. Examples: Mid-Modern Kitchen, Antique Living Room
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Type a description of this room and it's style" className="center forminputs shadow-sm" as="textarea" required value={this.props.roomdesc}
        onChange={this.props.handleChange} name="roomdesc"/>
          </Form.Group>
          <Button variant="primary"  onClick={this.props.nextStep} className="shadow">
            Next
          </Button>
      </div>
    );
  }
}


// onChange={this.handlenameChange} value={this.state.roomname}