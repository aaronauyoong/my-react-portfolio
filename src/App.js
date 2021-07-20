import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home";
import Nav from "./components/nav/Nav";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import "./assets/styles/custom-styles.css";

function App() {
	const [pages] = useState([
		{ name: "About" },
		{ name: "Portfolio" },
		{ name: "Resume" },
		{ name: "Contact" },
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

	useEffect(() => {
		document.title = `aaronauyoong :: ${currentPage.name}`;
	});

	return (
		<div className="react-portfolio">
			<Nav
				pages={pages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
			<Welcome />
			<main>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
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
