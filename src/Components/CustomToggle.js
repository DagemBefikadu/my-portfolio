import React from 'react'
import {
Button,
  } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export default function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );

    const backgroundColor = {
        borderStyle: "none",
        backgroundColor: "#f2f0eb",
        color: "black",
      };
  
    return (
      <Button 
        type="button"
        style={backgroundColor}
        onClick={decoratedOnClick}
        size="lg"
      >
        {children}
      </Button>
    );
  }