import React from "react";
import Typewriter from "typewriter-effect";
import ME2 from "../Static/ME2.png";
import Resume from "../Static/Resume.png";
import resume from "../Static/REsume.pdf";
import Projects from "../Static/Projects.png";
import About from "../Static/About.png";
import GitHub from "../Static/github.png";
import Outlook from "../Static/outlook.png";
import LinkedIn from "../Static/linkedIn.png";
import { Image, Container, Card, CardGroup, Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  AOS.init({
    duration: 1500,
  });

  const font = {
    color:"#13315C",
    // color:"#235789"
    fontFamily: '"Georgia", "sans-serif"',
    display: 'flex',
    flexDirection: 'row'
  };

  const test = {
    display: 'flex',
    flexDirection: 'row',
  }
  
  const backgroundColor = {
		border: '#BCCCE0',
		backgroundColor: '#f2f0eb',
	}
 
  return (
    <div>
      <Container></Container>
      <Container>
        <CardGroup>
          <img className=" m-xs-1 m-5" src={ME2}  />
          <Card style={backgroundColor}>
            <Card.Body>
              <Card.Text style={font}>
                D<Typewriter 
                  options={{
                    strings: ["agem", "eveloper", "esigner"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Card.Text>
              
              <Card.Text >
              <a href='https://linkedin.com/in/dagembefikadu'><Image className="m-5" data-aos="fade-right" src={LinkedIn}  className="logo" alt="GitHub"width="50" length="50"/></a>
              <a href={'mailto:dagem.befikadu@outlook.com'}><Image className="m-5" data-aos="fade-down" alt="Outlook" src={Outlook}width="50" length="50"/></a>
              <a href='https://github.com/DagemBefikadu'><Image className="m-5" data-aos="fade-left" src={GitHub} className="logo" alt="GitHub"width="50" length="50"/></a>
              </Card.Text>
              <Card.Text data-aos="zoom-in-down">
              <a href={resume} target="_blank"><Image className=" " data-aos="fade-right" roundedCircle src={Resume} width="115" length="115"/></a>  
              <a href="#about"><Image className="m-5 mb-5" data-aos="fade-down" roundedCircle src={About} width="110" length="110"/></a>   
              <a href="#projects"><Image className="" data-aos="fade-left" roundedCircle src={Projects} width="110" length="110"/></a> 
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}


