import NavBare from "../Components/NavBare.jsx";
import Home from "./Home.jsx";
import "./HomePage.css";
import About from "./AboutPage.jsx";
import Features from "../Components/Features.jsx";
import Contactt from "./Contactt.jsx";

export default function Homepage() {
  return (
    <div className="home">
        <Home />
        <About />
        <Features />
        <Contactt />
    </div>
  );
}
