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
            <FaLaptopCode size={24} color="#6c5b46ff" />
            <p>Programming</p>
          </div>

          <div className="categorie">
            <FaCalculator size={24} color="#675641ff" />
            <p>Math</p>
          </div>

          <div className="categorie">
            <FaBook size={24} color="#5e4d37ff" />
            <p>Philosophy</p>
          </div>

          <div className="categorie">
            <FaRobot size={24} color="#514331ff" />
            <p>Intelligence Artificielle</p>
          </div>
        </div>
      </div>
    </div>
  );
}
