import React from "react";
import {
  Card,
  CardGroup,
  Col, Row, Image, Container, Accordion, Button,
} from "react-bootstrap";

import P1 from "../Static/projectImg/P1.png";
import P2 from "../Static/projectImg/P2.png";
import P3 from "../Static/projectImg/P3.png";
import GitHub from "../Static/github.png";
import Chrome from "../Static/MyOther/chrome.png";
import CustomToggle from "./CustomToggle";

export default function Projects() {
  const backgroundColor = {
    borderStyle: "none",
    backgroundColor: "#f2f0eb",
    color: "black",
  };

  const borderColor = {
    borderStyle: "none",
    backgroundColor: "#f2f0eb",
    color: "black",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px'
  };

  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '210px'
  };

  const fontColor = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '210px',
    border: "#38361E",
    color: "black",
    fontFamily: '"Lucida Console", "Courier New", "monospace"',
  };

  const fontBack = {
    border: "#38361E",
    color: "#F5F5DC",
    fontFamily: '"Lucida Console", "Courier New", "monospace"',
    borderStyle: "none",
    backgroundColor: "#f2f0eb",
    color: "black",
  };


  return (
    <>
      <h1 id="projects" style={fontColor} className="text-center" >Projects</h1>
      <CardGroup style ={backgroundColor} className="">
        <Card style ={backgroundColor} >
          <Accordion className="m-2 text-center">
      <Card style ={borderColor}  >
      <Card.Title><h1>Hoop Dream</h1></Card.Title>
        <Card.Header>
          <CustomToggle eventKey="0">More Detail!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card id="projects" className="m-4" style={fontBack}>
          <Card.Body>
            <Card.Text>
              <h6 className="p-2" style={backgroundColor}>
                > Hoop Dreamer is a game where you will go around the court and
                collect all the game balls before the clock runs out. While
                avoiding the food and sweat puddles
              </h6>
            </Card.Text>
            <Card.Text>
              <h5>
                <strong>Technologies:</strong>
              </h5>
              <Row>
                <Col className="m-1" style={backgroundColor}>
                  <h5>HTML(Canvas)</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>JavaScript(ES6)</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>CSS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>Bootstrap</h5>
                </Col>
              </Row>
            </Card.Text>
            <Card.Text>
              <Container>
              <Row>
                <Col>
                      <h5 style={fontBack}>GitHub Repo</h5>
                  {" "}
                  <a href="https://github.com/DagemBefikadu/SEI-Project-one" target="_blank">
                    <Image
                      className="m-sm-5"
                      src={GitHub}
                      className="logo"
                      alt="GitHub"
                      width="50"
                      length="50"
                    />
                  </a>
                </Col>
                <Col>
                  {" "}
                  <h5 style={fontBack}>Live Link</h5>
                  <a href="https://dagembefikadu.github.io/SEI-Project-one/" target="_blank">
                    <Image
                      className="m-sm-5"
                      src={Chrome}
                      className="logo"
                      alt="GitHub"
                      width="50"
                      length="50"
                    />
                  </a>
                </Col>
              </Row>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
        </Accordion.Collapse>
      </Card>
    </Accordion>
        </Card>
        <Card  style ={backgroundColor}>
          <Card.Text>
              <Card.Img src={P1} />
          </Card.Text>
        </Card>
      </CardGroup>
      <CardGroup style ={backgroundColor}>
        <Card style ={backgroundColor}>
          {/* <Card.Body style={center} >
              <Card.Title ><h1>Hoop Dreams</h1></Card.Title>
          </Card.Body> */}
          <Accordion className="m-2 text-center">
      <Card style ={borderColor} >
      <Card.Title ><h1>My Coffee</h1></Card.Title>
        <Card.Header>
          <CustomToggle eventKey="0">More Detail!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card id="projects" className="m-4" style={fontBack}>
          <Card.Body>
            <Card.Text>
              <h6 className="p-2" style={fontBack}>
              > My Coffee is a place where you can learn about all the
                different kinds of coffee around the world. Here you can find
                the name, description and origin of the coffees.
              </h6>
            </Card.Text>
            <Card.Text>
              <h5>
                <strong>Technologies:</strong>
              </h5>
              <Row>
                <Col className="m-1" style={backgroundColor}>
                  <h5>HTML</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>CSS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>JavaScript(ES6)</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>Bootstrap</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>EJS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>ExpressJS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>NodeJS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>MySQL</h5>
                </Col>
              </Row>
            </Card.Text>
            <Card.Text>
              <Container>
              <Row>
                <Col>
                      <h5 style={fontBack}>GitHub Repo</h5>
                  {" "}
                  <a href="https://github.com/DagemBefikadu/projectTwoAssignment" target="_blank">
                    <Image
                      className="m-sm-5"
                      src={GitHub}
                      className="logo"
                      alt="GitHub"
                      width="50"
                      length="50"
                    />
                  </a>
                </Col>
                <Col>
                  {" "}
                  <h5 style={fontBack}>Live Link</h5>
                  <a href="https://yene-buna.herokuapp.com/" target="_blank">
                    <Image
                      className="m-sm-5"
                      src={Chrome}
                      className="logo"
                      alt="GitHub"
                      width="50"
                      length="50"
                    />
                  </a>
                </Col>
              </Row>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
        </Accordion.Collapse>
      </Card>
    </Accordion>
        </Card>
        <Card  style ={backgroundColor}>
          <Card.Text>
              <Card.Img src={P2} />
          </Card.Text>
        </Card>
      </CardGroup>
      <CardGroup style ={backgroundColor}>
        <Card style ={backgroundColor}>
          {/* <Card.Body style={center} >
              <Card.Title ><h1>Hoop Dreams</h1></Card.Title>
          </Card.Body> */}
          <Accordion className="m-2 text-center">
      <Card style ={borderColor} >
      <Card.Title ><h1>Helping-Hand</h1></Card.Title>
        <Card.Header>
          <CustomToggle eventKey="0">More Detail!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card id="projects" className="m-4" style={fontBack}>
          <Card.Body>
            <Card.Text>
              <h6 className="p-2" style={fontBack}>
              > Helping hand gives these users the tools to find the right
                information for meeting one another’s needs without having to
                look outside their own community
              </h6>
            </Card.Text>
            <Card.Text>
              <h5>
                <strong>Technologies:</strong>
              </h5>
              <Row>
                <Col className="m-1" style={backgroundColor}>
                  <h5>CSS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>JavaScript(ES6)</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>React</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>React Bootstrap</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>NodeJS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>ExpressJS</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>MongoDB</h5>
                </Col>
                <Col className="m-1" style={backgroundColor}>
                  <h5>Cloudinary’s API </h5>
                </Col>
              </Row>
            </Card.Text>
            <Card.Text>
              <Container>
              <Row>
                <Col>
                      <h5 style={fontBack}>GitHub Repo</h5>
                  {" "}
                  <a href="https://github.com/DagemBefikadu/Helping-Hand-React" target="_blank">
                    <Image
                      className="m-sm-5"
                      src={GitHub}
                      className="logo"
                      alt="GitHub"
                      width="50"
                      length="50"
                    />
                  </a>
                </Col>
                <Col>
                  {" "}
                  <h5 style={fontBack}>Live Link</h5>
                  <a href="https://helping-hands-sei.herokuapp.com/" target="_blank">
                    <Image
                      className="m-sm-5"
                      src={Chrome}
                      className="logo"
                      alt="GitHub"
                      width="50"
                      length="50"
                    />
                  </a>
                </Col>
              </Row>
              </Container>
            </Card.Text>
          </Card.Body>
        </Card>
        </Accordion.Collapse>
      </Card>
    </Accordion>
        </Card>
        <Card  style ={backgroundColor}>
          <Card.Text>
              <Card.Img src={P3} />
          </Card.Text>
        </Card>
      </CardGroup>
    </>
  );
}
