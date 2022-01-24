import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from "react";
import Home from './Components/Home';
import Header from './partials/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import { Route, Routes } from "react-router-dom";

function App() {
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
        <h1>
          <About />
        </h1>
        <br style={backgroundColor}/>
        <br />
        <h1>
          <Projects />
        </h1>
    </Fragment>
  );
}

export default App;
