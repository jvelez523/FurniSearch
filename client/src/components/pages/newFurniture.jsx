import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import { Card, CardDeck, Container, Fade, Form } from "react-bootstrap";
import Step1 from "../furnitureform/Step1";
import Step2 from "../furnitureform/Step2";



export default class newFurniture extends Component {
  state = {
    roomname: "",
    roomdesc: "",
    imgurl: "",
    tags: [],
    tag: ''
  };

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  handletagChange =(tags) => {
    this.setState({tags})
  }

  render() {
    return (
      <Fade appear={true} in={true}>
      <Container className="uploadformcont">
        <h2 className="center formhead">Upload A New Room</h2>
        <Form className="formhold">
          <StepWizard isHashEnabled={true} initialStep={1}>
            <Step1
              hashKey={"step1"}
              handleChange={this.handleChange}
              roomname={this.state.roomname}
              roomdesc={this.state.roomdesc}
            />
            <Step2
              hashKey={"step2"}
              handleChange={this.handleChange}
              handletagChange={this.handletagChange}
              imgurl={this.state.imgurl}
              tags={this.state.tags}
            />
          </StepWizard>
        </Form>
      </Container>
      </Fade>
    );
  }
}
