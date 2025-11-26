import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlipCard from './FlipCard';
import Nav_bare from './NavBare';

const PhysicsBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://openlibrary.org/subjects/math.json?limit=20")
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
            "Sujet": "Physique"
          },

          socialLinks: {
            "Voir Livre": `https://openlibrary.org${book.key}`
          }
        }));

        setBooks(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    
    <div className="cards-container" style={{ display: "flex", flexWrap: "wrap" }}>
        <Nav_bare/>
      {books.map((book, i) => (
        <FlipCard key={i} data={book} />
      ))}
    </div>
  );
};

export default PhysicsBooks;

