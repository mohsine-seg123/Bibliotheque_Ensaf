import NavBare from "../Components/NavBare.jsx";
import Home from "./Home.jsx";
import "./HomePage.css";
import About from "./AboutPage.jsx";
import Features from "../Components/Features.jsx";
import Contactt from "./Contactt.jsx";

export default function HomePage() {
  return (
    <div className="home">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contactt />
      </div>
    </div>
  );
}
