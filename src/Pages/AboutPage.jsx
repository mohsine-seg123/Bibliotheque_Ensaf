
import Stack from "../Components/Stack";
import "./AboutPage.css";
function About() {
  const images = [
    {
      id: 1,
      img: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
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

      {/* Right side: Book stack */}
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
