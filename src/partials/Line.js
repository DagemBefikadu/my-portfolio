import React from 'react'
import { Container } from "react-bootstrap";

export default function Line() {
    const backgroundColor = {
        border: "#F5F5DC",
        backgroundColor: "black",
      };
    return (
        <div>
             
                <div style={backgroundColor}>.</div>
                <div style={backgroundColor}>.</div>
                <div style={backgroundColor}>.</div>
                
            
        </div>
    )
}
