import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlipCard from './FlipCard';

const BooksAPI = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://openlibrary.org/search.json?q=harry+potter')
      .then(response => {
        const data = response.data.docs.slice(0, 10).map(book => ({
          
          image: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150",

          name: book.title, // ➤ utilisé en face avant
          location: book.author_name ? book.author_name[0] : "Auteur inconnu",

          bio: book.first_publish_year
            ? `Publié en ${book.first_publish_year}`
            : "Date inconnue",

          stats: {
            "Éditions": book.edition_count || "N/A",
            "Langue": book.language ? book.language[0] : "N/A",
          },

          socialLinks: {
            "Voir Livre": `https://openlibrary.org${book.key}`
          }
        }));

        setBooks(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {books.map((book, index) => (
        <FlipCard key={index} data={book} />
      ))}
    </div>
  );
};

export default BooksAPI;

