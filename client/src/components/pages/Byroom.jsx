import React, { Component } from 'react'
import { Row, Col, Card, Fade, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



export default class Byroom extends Component {

  componentWillReceiveProps(props){
    console.log(props)
  }
  render() {
    console.log(this)
    return (
      <Fade appear={true} in={true}>
      <Container>
      <div>
              <h1 className="center">Browse</h1>
          <Row className="catcont">
            
            <Col xs="6" lg="3" className="cathead">
            <Link  to="/browse/byroom">
              <Card className="text-white browsecard shadow">
                <Card.Img
                  src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg"
                  alt="Card image"
                  className="browsecatimg"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Room</Card.Title>
                </Card.ImgOverlay>
              </Card>
              </Link>
            </Col>
          
            <Col xs="6" lg="3" className="cathead">
              <Card className=" text-white browsecard shadow">
                <Card.Img
                  src="https://i.ytimg.com/vi/ZSFiLsjlV8o/maxresdefault.jpg"
                  alt="Card image"
                  className="browsecatimg"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Style</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col >
            <Col xs="6" lg="3" className="cathead">
              <Card className=" text-white browsecard shadow">
                <Card.Img
                  src="http://hillimage.com/wp-content/uploads/2016/01/color-swatches-images.jpeg"
                  alt="Card image"
                  className="browsecatimg"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Color</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs="6" lg="3" className="cathead">
              <Card className="text-white browsecard shadow">
                <Card.Img
                  src="https://ak1.ostkcdn.com/img/mxc/02182019_Furniture_Guide2_MultifunctionalFurnitureforSmallSpaces.jpg?imwidth=1024&impolicy=medium"
                  alt="Card image"
                  className="browsecatimg"
                />
                <Card.ImgOverlay>
                  <Card.Title>By Furniture</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
      </div>
      </Container>
      </Fade>
    )
  }
}
