import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/homepage/Home";
import Header from "./components/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import "./assets/styles/custom-styles.css";

function App() {

	return (
		<div className="react-portfolio">
			<Header />
			<main>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
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
