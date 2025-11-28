

const RatingStars = ({ rating }) => {
  const totalStars = 5;

  return (
    <div style={{ fontSize: "40px", color: "b" ,marginLeft:"40px"}}>
      {[...Array(totalStars)].map((_, i) => (
        <span key={i}>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
