import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import {  Container, Fade, Form } from "react-bootstrap";
import Step1 from "../furnitureform/Step1";
import Step2 from "../furnitureform/Step2";
import axios from "axios";
import {baseURL} from '../../api'
//{withCredentials:true}
axios.defaults.withCredentials = true;

export default class NewFurniture extends Component {
  state = {
    roomname: "",
    roomdesc: "",
    imgurl: "./placeholder-images-image_large.png",
    tags: [],
    furniture: [],
    roomtype: "kitchen"
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handletagChange = tags => {
    this.setState({
      tags: tags
    });
    console.log(this.state.tags);
  };

  handlefurnChange = furn => {
    this.setState({
      furniture: furn
    });
  };

  handleUpload = e => {
    console.log("file to upload", e);
    axios
    .post(`${baseURL}/picture`, e )
    .then((response) => {
      console.log("This is the response================", response);
      this.setState({
        imgurl: response.data.saved
      })
    })
    .catch(err => console.error(err))
  };

handleFile = async e => {
  e.preventDefault();
  const uploadData = new FormData();
  uploadData.append('imageURL', e.target.files[0]);
  await this.handleUpload(uploadData)
}




  onsubmit = data => {
    let body = {
      roomname: this.state.roomname,
      roomdesc: this.state.roomdesc,
      imgurl: this.state.imgurl,
      tags: this.state.tags,
      roomtype: this.state.roomtype,
      furniture: this.state.furniture,
      uid: this.props.user.uid
    };

    axios({
      method: "post",
      url: `${baseURL}/addroom`,
      data: body
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Fade appear={true} in={true}>
        <Container className="uploadformcont">
          <h2 className="center formhead">Upload A New Room</h2>
          {/* <Form className="formhold" action="http://localhost:5000/api/addroom" method="post" enctype="application/x-www-form-urlencoded"	> */}
          <Form className="formhold" onSubmit={this.onsubmit}>
            <StepWizard isHashEnabled={true} initialStep={1}>
              <Step1
                hashKey={"step1"}
                handleChange={this.handleChange}
                roomname={this.state.roomname}
                roomdesc={this.state.roomdesc}
                roomtype={this.state.roomtype}
              />
              <Step2
                hashKey={"step2"}
                handleChange={this.handleChange}
                handletagChange={this.handletagChange}
                handlefurnChange={this.handlefurnChange}
                furn={this.state.furniture}
                imgurl={this.state.imgurl}
                tags={this.state.tags}
                roomname={this.state.roomname}
                roomdesc={this.state.roomdesc}
                handleUpload={this.handleFile}
              />
            </StepWizard>
          </Form>
        </Container>
      </Fade>
    );
  }
}
