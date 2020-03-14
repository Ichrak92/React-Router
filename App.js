import React from 'react';
import Home from './Home';
import Courses from './Courses';
import Contact from './Contact';
import Nav from './Component/Nav';
import { BrowserRouter, Link, Route } from "react-router-dom";
export default class App extends React.Component
{
  render()
  {
  return (
   
    <BrowserRouter>
    <Nav />
    <div className="App">
      <switch>
        <Route path="/" component={Home}/>
        <Route path="/course" component={Courses}/>
        <Route path="/contact" component={Contact}/>
      </switch>
    </div>
    </BrowserRouter>
  );
  }
}


