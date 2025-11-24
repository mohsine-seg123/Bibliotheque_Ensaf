import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
 import Login from "./Pages/Login.jsx";
import HomePage from "./Pages/HomePage";
import Registre from "./Pages/Registre.jsx"

function App() {

  const [Users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login Users={Users}/>}
        />
        <Route
          path="register"
          element={<Registre Users={Users} setUsers={setUsers} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
