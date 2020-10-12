import React from 'react';
import './App.css';
import NavbarContainer from './components/NavbarContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import './pexels-caio-46274.jpg';
import About from './components/About';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <NavbarContainer></NavbarContainer>
      <Intro></Intro>
      <About></About>
      <Testimonials></Testimonials>
      {/* <Contact></Contact> */}
    </>
  );
}

export default App;
