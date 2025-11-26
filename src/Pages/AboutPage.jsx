
import Stack from "../Components/Stack";
import "./AboutPage.css";
function About() {
  const images = [
    {
      id: 1,
      img: "./About/about1.jpg",
    },
    {
      id: 2,
      img: "./About/about2.jpg",
    },
    {
      id: 3,
      img: "./About/about3.jpg",
    },
    {
      id: 4,
      img: "./About/about4.jpg",
    },
  ];

  return (
    <div className="About">
      <div className="About_gauch">
        <h1>About us</h1>
        <p>
          Welcome to our ENSAF Library Management Platform! 📚 Here, students
          can reserve their favorite books, share books they no longer use, and
          connect with other students to exchange them. Make reading easier and
          share your knowledge with your peers!
        </p>
        <button onClick={() => alert("Redirect to the reservation page")}>
          Reserve a Book
        </button>
      </div>

    
      <div className="About_droit">
        <Stack
          cardsData={images} // book images
          cardDimensions={{ width: 320, height: 320 }}
          randomRotation={true}
          sendToBackOnClick={true}
          sensitivity={180}
        />
      </div>
    </div>
  );
}

export default About;
