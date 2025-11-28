import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
 import Login from "./Pages/Login.jsx";
 import Layout from "./Components/Layout.jsx";
import HomePage from "./Pages/HomePage";
import Registre from "./Pages/Registre.jsx"
import Categorie from "./Pages/Categorie.jsx";
import FailedPage  from "./Pages/FailedPage.jsx"
import BooksBySubject from "./Components/BooksBySubject.jsx";
import Reserver from "./Components/Reserver.jsx";


function App() {
  const [Users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login Users={Users} />} />
          <Route
            path="register"
            element={<Registre Users={Users} setUsers={setUsers} />}
          />
          <Route path="categorie" element={<Categorie />} />
          <Route path="/subject/:name" element={<BooksBySubject />} />
          <Route path="Reserver" element={<Reserver />} />
        </Route>
        <Route path="*" element={<FailedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
