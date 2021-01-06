import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./ReactMeenu/About";
import Contact from "./Contact";
import Service from "./ReactMeenu/Service";
import Error from "./ReactMeenu/Error";
import Menu from "./ReactMeenu/Menu";
import User from "./ReactMeenu/User";
import Search from "./ReactMeenu/Search";

const App = () => {
  const Name = () => {
    return <h1> Hello, I am a Name Page </h1>;
  };

  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />}
        />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/user/:fname/:lname" component={User} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
