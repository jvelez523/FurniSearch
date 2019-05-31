import React, { Component } from "react";
import { Card, CardDeck, Container, Fade } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import {baseURL} from '../../api'
import { Redirect } from 'react-router';

export default class Yourroom extends Component {



delete = (id) =>{
  console.log("im running")

  axios
    .get(`${baseURL}/delete/${id}`)
    .then(response => {
      console.log("This is the response================", response);

    })
    .catch(err => console.error(err))
    this.setState(this.state)
}






  render() {
    return (
      <div className="roomsholder">
      <Container>
      <CardDeck>
        {/* <Fade appear={true} in={true}> */}
          {this.props.roomdata.map((room, index) => (
            <Card className="shadow">
              <Card.Img variant="top" src={room.imgurl} />
              <Card.Body>
                <Card.Title>{room.roomname}</Card.Title>
                <Card.Text>
                  {room.roomdesc}
                </Card.Text>
              </Card.Body>
              <Link to={`/browse`} onClick={ () => this.delete(room._id) }>
              <Card.Footer className="userfooter">
                <p>Delete</p>
              </Card.Footer>
              </Link>
            </Card>
          ))}
          </CardDeck>
          </Container>
          {/* <Container>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        </Container> */}
        {/* </Fade> */}
      </div>
    );
  }
}
