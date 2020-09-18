import React, { useEffect, useRef } from "react";
import "./App.css";
import { TweenMax, TimelineLite, Power3 } from "gsap";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let app = useRef(null);
  let text = useRef(null);
  let comp = useRef(null);
  let slider = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(comp, 0, { css: { visibility: "visible" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 })
      .to(".slider", { y: "-100%", duration: 1.5, delay: 1.4 })
      .to(".intro", { y: "-100%", duration: 1 }, "-=1.2")
      .fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.2 })
      .fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")
      .fromTo(".bg", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  });

  return (
    <div className="App" ref={(el) => (comp = el)}>
      <div className="main">
        <section class="landing">
          <nav classname="navbar navbar-expand-lg" style={{ color: "white" }}>
            <h1 id="logo">Afloat</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul class="nav-links navbar-nav">
                <li className="nav-item">Home</li>
                <li>Contact</li>
                <li>About</li>
              </ul>
            </div>
          </nav>
          <h2 class="big-text">Stay Afloat</h2>
        </section>
      </div>
      <div class="intro" ref={(el) => (app = el)}>
        <div class="intro-text" ref={(el) => (text = el)}>
          <h1 class="hide">
            <span class="text">Creating Innovation</span>
          </h1>
          <h1 class="hide">
            <span class="text">for Everyday</span>
          </h1>
          <h1 class="hide">
            <span class="text">people.</span>
          </h1>
        </div>
      </div>
      <div class="slider" />
    </div>
  );
}

export default App;
