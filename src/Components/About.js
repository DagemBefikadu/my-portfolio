import React from "react";
import { Card, CardGroup, Container, Image, Accordion } from "react-bootstrap";
import css from "../Static/MyOther/css.png";
import js from "../Static/MyOther/js.png";
import mongo from "../Static/MyOther/mongo.png";
import node from "../Static/MyOther/node.png";
import npm from "../Static/MyOther/npm.png";
import post from "../Static/MyOther/post.png";
import react from "../Static/MyOther/react.png";
import python from "../Static/MyOther/python.png";
import AboutToggle from "./AboutToggle"


export default function About() {
  const backgroundColor = {
    border: "#BCCCE0",
    backgroundColor: "#f2f0eb",
  };
  const fontColor = {
    border: "#D27B1C",
    backgroundColor: "#D27B1C",
    color: "#F5F5DC",
    fontFamily: '"Lucida Console", "Courier New", "monospace"'
  };

  const font = {
    fontFamily: '"Lucida Console", "Courier New", "monospace"'
  };
  return (
    <div>
      <Container id="about">
        <CardGroup>
          <Card  style={backgroundColor}>
            <Card.Body>
            <Card style={fontColor}>A Little About Me...</Card>
            <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <AboutToggle eventKey="0">What Do I Bring</AboutToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <Card.Text>
                <h5 style={font}>
                  > I'm a Full Stack Web Deleloper driven by critical thinking and
                  problem solving. <br />
                  With a background in Sales and Management I possess the
                  ability to thrive in fast-paced environments which required
                  proactive decision-making. I flourish in team oriented
                  environments and adapt well to challenges.
                </h5>
              </Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <AboutToggle eventKey="2">Learning</AboutToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body style={font}>
            <h5>
            > Currently refactor my old projects
            <hr />
            > Also working on a new Python project with the help of Udemy
            </h5>
            </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <AboutToggle eventKey="1">On My Free time </AboutToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <h5 style={font}>
            > Playing Basketball
            <hr />
            > Watching Basketball(Basketball fanactic, Die Hard Warriors Fan!!!) but I also love watching Football(Raider Nation) and Soccer(Go Manchester City)
            </h5>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
            </Card.Body>
          </Card>
          <Card style={backgroundColor}>
            <Card.Body>
            <Card.Text style={fontColor}>Skills</Card.Text>
            <Image className="m-5 mb-5"src={css} width="50" length="50" />
            <Image className="m-5 mb-5"src={js}width="50" length="50"></Image>
            <Image className="m-5 mb-5" src={node}width="50" length="50"></Image>
            <Image className="m-5 mb-5"src={npm}width="50" length="50"></Image>
            <Image className="m-5 mb-5" src={post}width="50" length="50"></Image>
            <Image className="m-5 mb-5"src={python}width="50" length="50"></Image>
            <Image className="m-5 mb-5"src={react}width="50" length="50"></Image>
            <Image className="m-5 mb-5"src={mongo}width="70" length="70"></Image>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}


