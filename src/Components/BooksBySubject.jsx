import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FlipCard from "./FlipCard";

const BooksBySubject = () => {
  const { name } = useParams(); 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/subjects/${name}.json?limit=20`)
      .then(res => {
        const data = res.data.works.map(book => ({
          image: book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : "https://via.placeholder.com/150",

          name: book.title,
          location: book.authors ? book.authors[0].name : "Auteur inconnu",

          bio: book.first_publish_year
            ? `Publié en ${book.first_publish_year}`
            : "Pas de date",

          stats: {
            "Éditions": book.edition_count || "N/A",
            "Sujet": name.replace(/_/g, " ").toUpperCase()
          },

          socialLinks: {
            "Voir Livre": `https://openlibrary.org${book.key}`
          }
        }));

        setBooks(data);
      })
      .catch(err => console.log(err));
  }, [name]);

  return (
    <div className="cards-container" style={{ display: "flex", flexWrap: "wrap" }}>
      {books.map((book, i) => (
        <FlipCard key={i} data={book} />
      ))}
    </div>
  );
};

export default BooksBySubject;
