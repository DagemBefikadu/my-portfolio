import React from 'react'
import { Card, CardGroup, Container } from "react-bootstrap"




export default function About() {
    // const [dagem] = useState({
    //     name: 'Dagem Befikadu',
    //     github: 'https://github.com/DagemBefikadu',
    //     email: 'dbefikadu94@gmail.com',
    //     linkedin: 'https://www.linkedin.com/in/dagembefikadu/',
    //     headshot: 'https://media-exp1.licdn.com/dms/image/C4E03AQHMAvT9s8_UMg/profile-displayphoto-shrink_800_800/0/1553665237112?e=1645056000&v=beta&t=arDjJftlWQPsO1Li-LvJX0I0t3EImIhCZUwIJrG0BzY',
    //     about: '',
    // })
    const backgroundColor = {
		border: '#BCCCE0',
		backgroundColor: '#f2f0eb',
	}
    return (
        <div>
            <h1>About Page</h1>
            <Container>
            <CardGroup>
            <Card >
               {/* <Card.Img src="https://media-exp1.licdn.com/dms/image/C4E03AQHMAvT9s8_UMg/profile-displayphoto-shrink_800_800/0/1553665237112?e=1645056000&v=beta&t=arDjJftlWQPsO1Li-LvJX0I0t3EImIhCZUwIJrG0BzY" /> */}
            </Card>
            <Card style={backgroundColor}>
               <Card.Body>
                   <Card.Text>About Me</Card.Text>
                   <Card.Text>I am a Software Engineer driven by critical thinking and problem solving with a background in Sales and Management. I possess the ability to thrive in fast-paced environments requiring proactive decision-making. I flourish in team oriented environments and adapt well to challenges. </Card.Text>
               </Card.Body>
            </Card>
            </CardGroup>
            </Container>
        </div>
    )
}


// <hr />
//                 <h5>I'm a Full Stack Web Deleloper driven by critical thinking and problem solving. 
//                 <br />
//                 With a background in Sales and Management I possess the ability to thrive in fast-paced environments which required proactive decision-making. 
//                 I flourish in team oriented environments and adapt well to challenges.</h5>