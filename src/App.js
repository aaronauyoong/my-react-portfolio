import React, { useState, useEffect } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
	return (
		<div className="react-portfolio">
      <Nav />
      <main>
        <About />
        <Contact />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
		</div>
	);
}

export default App;
