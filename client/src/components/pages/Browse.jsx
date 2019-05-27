import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Fade } from "react-bootstrap";

export default class Browse extends Component {
  render() {
    return (
      <Fade appear={true} in={true}>
        <Container>
        <h1 className="center">Browse</h1>
          <Row className="catcont">
            <Col xs="6" lg="3" className="cathead">
              <Card className="text-white browsecard shadow">
                <Card.Img
                  src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Room</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs="6" lg="3" className="cathead">
              <Card className=" text-white browsecard shadow">
                <Card.Img
                  src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Style</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col >
            <Col xs="6" lg="3" className="cathead">
              <Card className=" text-white browsecard shadow">
                <Card.Img
                  src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Color</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs="6" lg="3" className="cathead">
              <Card className="text-white browsecard shadow">
                <Card.Img
                  src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Furniture</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          {/* Content */}
          <Row>
            <Col xs="12" lg="4" className="cardcol">
              <Card className="text-center shadow">
                <Card.Header>House Name</Card.Header>
                <Card.Body>
                  <Card.Img
                    src="./placeholder-images-image_large.png"
                    alt="Card image"
                    className="center"
                  />
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
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
            <Col xs="12" lg="4" className="cardcol">
              <Card className="text-center shadow">
                <Card.Header>House Name</Card.Header>
                <Card.Body>
                  <Card.Img
                    src="./placeholder-images-image_large.png"
                    alt="Card image"
                    className="center"
                  />
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
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
            <Col xs="12" lg="4" className="cardcol">
              <Card className="text-center shadow">
                <Card.Header>House Name</Card.Header>
                <Card.Body>
                  <Card.Img
                    src="./placeholder-images-image_large.png"
                    alt="Card image"
                    className="center"
                  />
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
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
          </Row>
        </Container>
      </Fade>
    );
  }
}
