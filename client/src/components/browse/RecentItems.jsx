import React, { Component } from "react";
import { Row, Col, Card, Button, Badge, Fade, CardColumns } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../../api";
import { Link } from "react-router-dom";

export default class RecentItems extends Component {
  state = {
    housedata: []
  };

  componentDidMount() {
    axios
      .get(`${baseURL}/rooms`)
      .then(response => {
        console.log("This is the response================", response.data);
        this.setState({
          housedata: response.data.data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Fade appear={true} in={true}>
      <div>
        <h1 className="center">Recently Uploaded Rooms</h1>
        <Row>
        <CardColumns>
          {this.state.housedata.map((house, index) => (
          
            <Card className="text-center shadow">
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
        </Row>
      </div>
      </Fade>
    );
  }
}
