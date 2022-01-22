import React from "react";
import { Card, CardGroup, Container, Image } from "react-bootstrap";
import P1 from "../Static/projectImg/P1.png";
import P2 from "../Static/projectImg/P2.png";
import P3 from "../Static/projectImg/P3.png";
import GitHub from "../Static/github.png";

export default function Projects() {
  const font = {
    fontFamily: '"Lucida Console", "Courier New", "monospace"',
  };

  const backgroundColor = {
    border: "#BCCCE0",
    backgroundColor: "#f2f0eb",
  };

  const fontColor = {
    border: "#38361E",
    backgroundColor: "#38361E",
    color: "#F5F5DC",
    fontFamily: '"Lucida Console", "Courier New", "monospace"',
  };

  return (
    <>
      <h1>Projects</h1>
      <CardGroup>
        <Card className="m-4" style={fontColor}>
          <Card.Body>
            <Card style={fontColor}>Hoop Dreamer</Card>
            <br />
            <Card.Img src={P1} />
            <Card.Text>
              <br />
              <h3>
                Hoop Dreamer is a game where you will go around the court and
                collect all the game balls before the clock runs out. While
                avoiding the food and sweat puddles
              </h3>
            </Card.Text>
            <Card.Text>
              <h2>Technologies used: </h2>
              <h3>HTML(Canvas), CSS, JavaScript, Bootstrap</h3>
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
              <h3>
                My Coffee is a place where you can learn about all the different
                kinds of coffee around the world. Here you can find the name,
                description and origin of the coffees
              </h3>
            </Card.Text>
            <Card.Text>
              <h2>Technologies used: </h2>
              <h3>
                HTML, CSS, JavaScript, Node.js, ExpressJS, EJS, MySQL, Bootstrap
              </h3>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-4" style={fontColor}>
          <Card.Body>
            <Card style={fontColor}>Helping-Hand</Card>
            <br />
            <Card.Img src={P3} />
            <Card.Text>
              <h3>
              <br />
                Our users are community members who want to use their surplus
                goods to meet the needs of their community members. Helping hand
                gives these users the tools to find the right information for
                meeting one another’s needs without having to look outside their
                own community
              </h3>
            </Card.Text>
            <Card.Text>
              
              <h2>Technologies used: </h2>
              <h3>
                CSS, JavaScript, React, React Bootstrap, Node.js, ExpressJS,
                MongoDB, Cloudinary’s API{" "}
              </h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
