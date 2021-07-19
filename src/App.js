import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./assets/styles/custom-styles.css";

function App() {
	return (
		<div className="react-portfolio">
			<Nav />
			<Welcome />
			<main>
				<Router>
					<Switch>
						<Route exact path="/about" component={About} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/resume" component={Resume} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</Router>
			</main>
			<Footer />
		</div>
	);
}

export default App;
