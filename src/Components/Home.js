import React from "react";
import Typewriter from "typewriter-effect";
import ME2 from "../Static/ME2.png";
import Resume from "../Static/Resume.png";
import Projects from "../Static/Projects.png";
import About from "../Static/About.png";
import GitHub from "../Static/github.png";
import Outlook from "../Static/outlook.png";
import LinkedIn from "../Static/linkedIn.png";
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
          <img className="m-5" src={ME2}  />
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
              </Card.Text>
              
              <Card.Text>
              <a href='https://linkedin.com/in/dagembefikadu'><Image className="m-sm-5" src={LinkedIn} className="logo" alt="GitHub"width="50" length="50"/></a>
              <a href={'mailto:dagem.befikadu@outlook.com'}><Image className="m-sm-5" alt="Outlook" src={Outlook}width="50" length="50"/></a>
              <a href='https://github.com/DagemBefikadu'><Image className="m-sm-5"  src={GitHub} className="logo" alt="GitHub"width="50" length="50"/></a>
              </Card.Text>
              <Card.Text>
              <a href="#targetname"><Image className=" " roundedCircle src={Resume} width="115" length="115"/></a>  
              <a href="#targetname"><Image className="m-sm-5 mb-sm-5" roundedCircle src={About} width="110" length="110"/></a>   
              <a href="#targetname"><Image className="" roundedCircle src={Projects} width="110" length="110"/></a> 
              </Card.Text>
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
