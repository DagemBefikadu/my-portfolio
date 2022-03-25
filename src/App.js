import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from "react";
import Home from './Components/Home';
import Header from './partials/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import { Route, Routes } from "react-router-dom";
import Line from './partials/Line';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // AOS.init({
  //   easing: "ease-out",
  //   duration: 800,
  // });
  const backgroundColor = {
    border: "4287f5",
    backgroundColor: "4287f5",
  };
  return (
    <Fragment className="App">
          <Header />
        <h1>
          <Home />
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>
          <About />
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br style={backgroundColor}/>
        <br />
        {/* <Line /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        <h1>
          <Projects />
        </h1>
    </Fragment>
  );
}

export default App;
