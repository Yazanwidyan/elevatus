import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { NavBar } from "./components/navBar/NavBar";
import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
export default Navigation;
