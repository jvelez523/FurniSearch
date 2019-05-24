import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class Searchhome extends Component {
  render() {
    return (
      <div className="searchHold">
<h1 className="center">Search Now!</h1>
        <Form>
          <Form.Group controlId="formBasicSearch">
            <Form.Control type="search" placeholder="Search" className="center searchinput"/>
            <Form.Text className=" center searchdesc">
              Use the above search box to search for furniture or rooms.
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
