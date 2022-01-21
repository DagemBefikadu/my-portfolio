import React from "react";
import Typewriter from "typewriter-effect";
import ME2 from "../Static/ME2.png";
import Resume from "../Static/Resume.png";
import Projects from "../Static/Projects.png";
import About from "../Static/About.png";
import { Image, Container, Card, CardGroup, Button } from "react-bootstrap";
import { MDBContainer } from 'mdb-react-ui-kit';

export default function Home() {
  const backgroundColor = {
		border: '#BCCCE0',
		backgroundColor: '#f2f0eb',
	}
  const img = {
    filter: 'grayscale(100%)'
  }

  const backgroundButton = {
		border: '#4C061D',
		backgroundColor: '#4C061D'
	}

  return (
    <div>
      <Container></Container>
      <Container>
        <CardGroup>
          <Image className="m-4" roundedCircle src={ME2}  />
          <Card style={backgroundColor}>
            <Card.Body>
              <Card.Text>
                <Typewriter 
                  options={{
                    strings: ["Dagem", "Developer", "Designer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
                {/* <h4>
                FULL STACK WEB DEVELOPER 
                </h4> */}
                <hr />
                <h5>I'm a Full Stack Web Deleloper driven by critical thinking and problem solving. 
                <br />
                With a background in Sales and Management I possess the ability to thrive in fast-paced environments which required proactive decision-making. 
                I flourish in team oriented environments and adapt well to challenges.</h5>
                
              </Card.Text>
              <MDBContainer>
              <a href="#targetname"><Image className="m-sm-5 mb-sm-5" roundedCircle src={Resume} width="115" length="115"/></a>  
              <a href="#targetname"><Image className="m-sm-5 mb-sm-5" roundedCircle src={Projects} width="110" length="110"/></a> 
              <a href="#targetname"><Image className="m-sm-5 mb-sm-5" roundedCircle src={About} width="110" length="110"/></a>   
              </MDBContainer>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

{
  /* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("My name is Dagem Befikadu \n I am Software Engineer baised out of the Bay Area(San Jose)")
            // .callFunction(() => {
            //   console.log("String typed out!");
            // })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      /> */
}
