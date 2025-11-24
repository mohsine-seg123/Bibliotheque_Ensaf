import "./HomePage.css";

export default function Home(){
    return(
        <div className="homePage">
        <p className="title1">Dive Into the World of LibraryEnsaf Books</p>
        <p className="title2">ENSAF Library Book Management System</p>

        <div className="search-box">
          <input type="text" placeholder="Enter the name of books" />
          <button>&#128269;</button>
        </div>

        <div className="images-row">
          <img src="/1758.jpg" alt="imG 2" />
        </div>

        <div className="categories">
          <div className="categorie">
            <img src="/developer.png" alt="hhh" />
            <p>Programming</p>
          </div>

          <div className="categorie">
            <img src="/math.png" alt="hhh" />
            <p>Math</p>
          </div>

          <div className="categorie">
            <img src="/philosopher.png" alt="hhh" />
            <p>Philosophy</p>
          </div>

          <div className="categorie">
            <img src="/ai.png" alt="hhh" />
            <p>Intelligence Artificielle</p>
          </div>
        </div>
      </div>
    )
}