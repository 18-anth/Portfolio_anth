import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import Navigation from "./widgets/Nav.jsx";
import Container from "./pages/Container.jsx";
import Footer from "./pages/footer.jsx";
import AboutMe from "./pages/aboutme.jsx";

class App extends Component {
  render() {
    const alignCenter = { display: "flex", alignItems: "center" };

    return (
      <div className="Parallax-container">
        <Parallax pages={4} style={{ background: "#FFFFFF" }}>
          <ParallaxLayer
            offset={0}
            speed={0.3}
            style={{
              background: "#17191DDA",
              color: "#FFFFFF",
            }}
          >
            <section id="Home">
              <Navigation />
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              ...alignCenter,
              justifyContent: "center",
              textAlign: "center",
              background: "#17191DDA",
            }}
          >
            <section id="Project">
              <Container />
            </section>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.2}
            style={{
              ...alignCenter,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              color: "white",
              background: "#17191DDA",
            }}
          >
            <section id="AboutMe">
              <AboutMe />
            </section>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.4}
            style={{
              ...alignCenter,
              justifyContent: "center",
              textAlign: "center",
              background: "#17191DDA",
              color: "white",
            }}
          >
            <section id="Contact">
              <Footer />
            </section>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}
export default App;
