import React, { Component } from 'react'
import {  Button, Card } from "react-bootstrap";
import TagsInput from 'react-tagsinput'

export default class Step2 extends Component {


state = {
  file: "/placeholder-images-image_large.png",
  tags: []
}


componentDidMount(){
  console.log("step 2", this.state)
}

  render() {
    return (
      <div className="imguploadhold">
        <img src={this.state.file} className="uploadpw"/>
        <input type="file" onChange={this.handleChange} className="fileupload" value={this.props.imgurl}
        onChange={this.props.handleChange} name="imgurl"/>
        <p>Below, please add tags that describe the furniture within the room, and the overall style of the room</p>
        <TagsInput value={this.props.tags} onChange={this.props.handletagChange} />
        <div className="stepbtns">
        <Button variant="success" type="submit" onClick={this.props.nextStep} className="shadow">
            Post Room
          </Button>
          </div>
      </div>
    )
  }
}
