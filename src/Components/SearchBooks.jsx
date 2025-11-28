import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlipCard from "./FlipCard";
import axios from "axios"; // Importer axios
import Nav_bare from "./NavBare";
import ScrollToTop from "./ScrollToTop";
import "./SearchBooks.css";
import Spinner from "./Spinner";

export default function SearchBooks() {
  const [loading,setLoading]=useState(true);

  const location = useLocation();
  const [books, setBooks] = useState([]);
  const params = new URLSearchParams(location.search);
  const query = params.get("query");
  useEffect(() => {
    if (!query) return;

    axios
      .get(`https://openlibrary.org/search.json?q=${query}`)
      .then((res) => {
        setTimeout(() => {
          const data = res.data;
          const formattedBooks = data.docs.slice(0, 20).map((book) => ({
            image: book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "/Img_err.png",
            name: book.title,
            location: book.author_name ? book.author_name[0] : "Auteur inconnu",
            bio: book.first_publish_year
              ? `Publié en ${book.first_publish_year}`
              : "Pas de date",
            stats: {
              Éditions: book.edition_count || "N/A",
              Sujet: "Recherche",
            },
          }));
          setLoading(false);
          setBooks(formattedBooks);
        }, 1000);
      })
      .catch((err) =>
        console.error("Erreur lors de la récupération des livres :", err)
      );
  }, [query]);
    
    if (loading) {
      return <Spinner />;
    }
    
  return (
    <div className="cards-container" style={{ display: "flex", flexWrap: "wrap" }}>
        <Nav_bare/>
      {books.map((b, i) => (
        <FlipCard key={i} data={b} />
      ))}
      <ScrollToTop/>
    </div>
  );
}

