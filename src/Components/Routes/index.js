import React from "react";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import { Switch, Route } from "react-router-dom";
import Branding from "../../Pages/Branding";
import Portfolio from "../../Pages/Portfolio";
import PrintDesign from "../../Pages/Print_desig";
import WebDesign from "../../Pages/Web_design";
import ScrollToTop from "../../scoll";
export default function Routes() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/branding" component={Branding} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/printdesign" component={PrintDesign} />
        <Route exact path="/webdesign" component={WebDesign} />
      </Switch>
    </div>
  );
}
