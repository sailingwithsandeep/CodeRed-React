import React from "react";
import Home from "./Home";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";
import Team from "./Team";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
const App = () => {
	return (
		<>
			<AnimatedCursor
				innerSize={8}
				outerSize={8}
				color='192, 22, 22'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={2}
			/>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/service' component={Service} />
				<Route exact path='/projects' component={Project} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/team' component={Team} />
				<Redirect to='/' />
			</Switch>
			<Footer />
		</>
	);
};
export default App;
