import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import TagsInput from "react-tagsinput";



export default class Step2 extends Component {
  state = {
    file: "/placeholder-images-image_large.png",
    roomname: '',
    roomdesc: '',
    imgurl: "",
    tags: [],
  };

  componentDidMount() {
    console.log("step 2", this.state);
  }

  updateState() {
    if(this.props.roomanme) {
      this.setState({
        roomname: this.props.roomname,
        roomdesc: this.props.roomdesc,
      })
    }
  }


  onSubmit = (e) => {
    // e.preventDefault()
  }


  render() {
    return (
      <div className="imguploadhold">
        <img src={this.props.imgurl} className="uploadpw" />
        <input
          type="file"
          className="fileupload"
          onChange={this.props.handleUpload}
          name="imgurl"
        />
        <p>
          Below, please add the furniture that is contained within the room. Select enter aftet each item to add another item.
        </p>
        <input
          value={this.props.furn}
          name="furniture"
          className="taginputtest"
          />
        <TagsInput
          value={this.props.furn}
          onChange={this.props.handlefurnChange}
          name="furninput"
          inputProps={{placeholder: "Add furniture"}}
        />
        <p>
          Below, please add tags that describe the furniture within the room,
          and the overall style of the room
        </p>
        <input
          value={this.props.tags}
          name="tags"
          className="taginputtest"
          />
        <TagsInput
          value={this.props.tags}
          onChange={this.props.handletagChange}
          name="tagsinput"
        />
        <div className="stepbtns">
          <Button
            variant="success"
            type="submit"
            onClick={this.onSubmit}
            className="shadow"
          >
            Post Room
          </Button>
        </div>
      </div>
    );
  }
}
