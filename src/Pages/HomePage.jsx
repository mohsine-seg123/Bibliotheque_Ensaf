import NavBare from "../Components/NavBare.jsx";
import "./HomePage.css";
import { FaLaptopCode, FaCalculator, FaBook, FaRobot } from "react-icons/fa";


export default function Homepage() {
  return (
    <div className="home">
      <NavBare />

      <div className="homePage">
        <p className="title1">Dive Into the World of LibraryEnsaf Books</p>
        <p className="title2">ENSAF Library Book Management System</p>

        <div className="search-box">
          <input type="text" placeholder="Enter the name of books" />
          <button>&#128269;</button>
        </div>

        <div className="images-row">
          <img src="/img1.jpg" alt="imG 4" />
          <img src="/img1.jpg" alt="imG 3" />
          <img src="/img3.jpg" alt="imG 2" />
        </div>

        <div className="categories">
          <div className="categorie">
            <FaLaptopCode size={24} color="blue"/>
            <p>Programming</p>
          </div>

          <div className="categorie">
            <FaCalculator size={24}  color="blue"/>
            <p>Math</p>
          </div>

          <div className="categorie">
            <FaBook size={24} color="Blue"/>
            <p>Philosophy</p>
          </div>

          <div className="categorie">
            <FaRobot size={24} color="blue"/>
            <p>Intelligence Artificielle</p>
          </div>
        </div>

      </div>
    </div>
  );
}
