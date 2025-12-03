import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { loginWithGoogle ,logout} from "../Components/Firebase";  // <-- ajoute ça

export default function Login({ Users }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ----- Login normal email/password -----
function handleSubmit(e) {
  e.preventDefault();

  const Exist = Users.find(
    (user) => user.email === email && user.password === password
  );

  if (Exist) {
    // ✅ Ajouter : enregistre dans localStorage pour Navbar
    localStorage.setItem("currentUser", JSON.stringify(Exist));
    navigate("/home");
  } else {
    alert("Erreur d’authentification");
  }
}


  // ----- Login via Google -----
async function handleGoogleLogin() {
  try {
    const result = await loginWithGoogle();
    console.log("Google User:", result.user);
    navigate("/home");
  } catch (error) {
    console.error("Erreur Google Login Details:", error.code, error.message);
    alert(`Erreur Google Login: ${error.message}`);
  }
}

  return (
    <div className="login-page">
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="............."
        />

        <div className="btn">
          <button type="submit" className="login">
            Sign in
          </button> 
        </div>

  
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-btn"
        >
          Continue with Google
        </button>
        <div className="creat">
           <p>Don't have an account?</p>
           <NavLink to="/register" className="creat_account">
           Sign up now
          </NavLink>
        </div>
      </form>
    </div>
  );
}

