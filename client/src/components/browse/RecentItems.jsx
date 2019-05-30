import React, { Component } from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../../api";

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
      <div>
        <h1 className="center">Recently Uploaded Rooms</h1>
        <Row>
          {this.state.housedata.map((house, index) => (
            <Col xs="12" lg="4" className="cardcol">
            <Card className="text-center shadow">
              <Card.Header>{house.roomname}</Card.Header>
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
                  <Col>
                    <Button className="socbutton">
                      <i class="far fa-thumbs-up" />
                      Like
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="danger" className="socbutton">
                      <i class="far fa-heart" />
                      Favorite
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          ))}
        </Row>
      </div>
    );
  }
}
