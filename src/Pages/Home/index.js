import React from "react";
import "./style.scss";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <img src="Picture/solution1.gif " alt="spec" className="hero-img"></img>

      <div className="hero-text">
        <h1>
          Graphic design in allweb. <br />
          Specialists in branding, digital marketing and website.
        </h1>
        <br />
        <Link to="/portfolio">
          <button className="button">
            <span>View Portfolio</span>
          </button>
        </Link>
      </div>

      <div className="body">
        <div>
          <Section2 />
          <br />
          <br />
          <hr className="new" />
          <br />
          <Section3 />
          <Section4 />
        </div>
      </div>
    </div>
  );
}
