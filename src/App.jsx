import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./compenent/Login.jsx";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
