import React, { Component } from 'react'
import { Row, Col, Card } from "react-bootstrap";

export default class Categories extends Component {
  render() {
    return (
      <div>
              <h1 className="center">Browse</h1>
          <Row className="catcont">
            <Col xs="6" lg="3" className="cathead">
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
                  src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg"
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
    )
  }
}
