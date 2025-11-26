import "./Features.css";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

const featuresData = [
    {
      title: "Check Availability",
      description: "See which books are available in real-time before making a reservation.",
      src:"./research.png",
    },
    {
      title: "Reserve a Book",
      description: "Browse available books and reserve them easily for a specific period.",
      src:"./reserved.png"
    },
    {
      title: "Track Reading",
      description: "Keep track of the books you have read or borrowed.",
      src:"./book.png"
    },
    {
      title: "Notifications",
      description: "Get notified when a reserved book becomes available or is due soon",
      src:"./notification.png",
    },
  ];


export default function Features(){
    const Navigate=useNavigate();

    return (
      <div className="features">
        <h1>Our Features</h1>
        <div className="features_cartes">
          {featuresData.map((carte, index) => {
            return (
              <div key={index} className="feature_carte">
                <h3>{carte.title} <img src={carte.src}/></h3>
                <p>{carte.description}</p>
              </div>
            );
          })}
        </div>
        </div>
    );
}