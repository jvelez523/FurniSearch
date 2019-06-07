import React, { Component } from 'react'

import axios from "axios";
import {baseURL} from '../../api'
import { Row, Col, Card,  Badge, Fade, CardColumns, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Search extends Component {

  state= {
    results: []
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = e => {
    e.preventDefault()
    console.log("search input", e);
    let body = {
      search: this.state.search
    };
    axios({
      method: "post",
      url: `${baseURL}/search`,
      data: body
    })
      .then(response => {
        this.setState({
          results: response.data.data
        })
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };




  render() {
    console.log(this)
    return (
      <Fade appear={true} in={true}>
      <div className="searchpg">
      <div className="searchpg">
      <h1 className="center">Search Now!</h1>
        <Form onSubmit={this.handleSearch}>
          <Form.Group controlId="formBasicSearch">
            <Form.Control type="search" placeholder="Search" className="center searchinput" name="search" onChange={this.handleChange}/>
            <Form.Text className=" center searchdesc">
              Use the above search box to search for furniture or rooms.
            </Form.Text>
          </Form.Group>
        </Form>
        
        






      </div>



      
      <CardColumns>
          {this.state.results.map((house, index) => (
          
            <Card className="text-center shadow searchcard">
              <Card.Header><h5>{house.roomname}</h5></Card.Header>
              <Card.Img
                  src={house.imgurl}
                  alt="Card image"
                  className="center"
                />
              <Card.Body>
                <Card.Title>
                <h6>
                {house.tags.map((tag) => (
                  <Badge pill variant="primary" className="shadow cardbadge" >{tag}</Badge>
                ))}
                </h6>
                </Card.Title>
                <Card.Text>
                  {house.roomdesc}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Row>
                <Link to="/" className="socbtn">
                  <Col className="likebtn" >
                    
                      <i class="far fa-thumbs-up" />
                      Like

                  </Col>
                  </Link>
                  <Link to="/" className="socbtn">
                  <Col className="favbtn">
                    
                      <i class="far fa-heart" />
                      Favorite

                  </Col>
                  </Link>
                </Row>
              </Card.Footer>
            </Card>
         
          ))}
          </CardColumns>
</div>
      </Fade>
    )
  }
}
