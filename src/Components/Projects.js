import React from "react";
import { Card, CardGroup, Container, Image } from "react-bootstrap";
import P1 from "../Static/projectImg/P1.png";
import P2 from "../Static/projectImg/P2.png";
import P3 from "../Static/projectImg/P3.png";
import GitHub from "../Static/github.png";


export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <CardGroup>
        <Card className="m-4"  > 
          <Card.Body >
            <Card.Title>Card Title</Card.Title>
          <Card.Img  src={P1}  />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-4" >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          <Card.Img src={P2} />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-4" >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          <Card.Img src={P3} />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
