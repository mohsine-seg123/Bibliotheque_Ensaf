import NavBare from "../Components/NavBare.jsx";
import Home from "./Home.jsx";
import "./HomePage.css";
import About from "./AboutPage.jsx";

export default function Homepage() {
  return (
    <div className="home">
      <NavBare />
      <Home />
      <About />
      {/* About us */}
      {/* Our features */}
      {/* Foooter */}
    </div>
  );
}
