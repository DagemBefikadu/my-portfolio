import React from "react";
import { Card, CardGroup, Image, Container, Row, Col } from "react-bootstrap";
import P1 from "../Static/projectImg/P1.png";
import P2 from "../Static/projectImg/P2.png";
import P3 from "../Static/projectImg/P3.png";
import GitHub from "../Static/github.png";
import Chrome from "../Static/MyOther/chrome.png";

export default function Projects() {
  const font = {

    fontFamily: '"Lucida Console", "Courier New", "monospace"',
  };

  const backgroundColor = {
    borderStyle: "solid",
    backgroundColor: "#38361E",
    color: "#F5F5DC",
  };

  const border = {
    borderStyle: "solid",
  };

  const fontColor = {
    border: "#38361E",
    backgroundColor: "#38361E",
    color: "#F5F5DC",
    fontFamily: '"Lucida Console", "Courier New", "monospace"',
  };

  return (
    <>
      {/* <h1>Projects</h1> */}
      <CardGroup>
        <Card className="m-4" style={fontColor}>
          <Card.Body>
            <Card style={fontColor}>Hoop Dreamer</Card>
            <br />
            <Card.Img src={P1} />
            <Card.Text>
              <br />
              <h5 className="p-2" style={backgroundColor}>
                > Hoop Dreamer is a game where you will go around the court and
                collect all the game balls before the clock runs out. While
                avoiding the food and sweat puddles
              </h5>
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
                      <h5 style={fontColor}>GitHub Repo</h5>
                  {" "}
                  <a href="https://github.com/DagemBefikadu/SEI-Project-one">
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
                  <h5 style={fontColor}>Live Link</h5>
                  <a href="https://dagembefikadu.github.io/SEI-Project-one/">
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
        <Card className="m-4" style={fontColor}>
          <Card.Body>
            <Card className="mb-1" style={fontColor}>
              My Coffee
            </Card>
            <h4>"Yene Buna"</h4>
            {/* <Card.Subtitle className="mb-2 text-muted">"Yene Buna"</Card.Subtitle> */}
            <Card.Img src={P2} />
            <Card.Text>
              <br />
              <h5 className="p-2" style={backgroundColor}>
                > My Coffee is a place where you can learn about all the
                different kinds of coffee around the world. Here you can find
                the name, description and origin of the coffees
              </h5>
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
                      <h5 style={fontColor}>GitHub Repo</h5>
                  {" "}
                  <a href="https://github.com/DagemBefikadu/projectTwoAssignment">
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
                  <h5 style={fontColor}>Heroku Page</h5>
                  <a href="https://yene-buna.herokuapp.com/">
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
        <Card className="m-4" style={fontColor}>
          <Card.Body>
            <Card style={fontColor}>Helping-Hand</Card>
            <br />
            <Card.Img src={P3} />
            <Card.Text>
              <br />
              <h5 className="p-2" style={backgroundColor}>
                > Helping hand gives these users the tools to find the right
                information for meeting one another’s needs without having to
                look outside their own community
              </h5>
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
                      <h5 style={fontColor}>GitHub Repo</h5>
                  {" "}
                  <a href="https://github.com/DagemBefikadu/Helping-Hand-React">
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
                  <h5 style={fontColor}>Heroku Page</h5>
                  <a href="https://helping-hands-sei.herokuapp.com/">
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
      </CardGroup>
    </>
  );
}
