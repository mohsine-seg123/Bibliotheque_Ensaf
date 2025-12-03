import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Registre.css";
import { useNavigate } from "react-router-dom";

export default function Register({ Users, setUsers }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [codeEnsaf, setCodeEnsaf] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      fullName,
      email,
      phone,
      password,
      codeEnsaf,
    });

    const user = {
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
      codeEnsaf: codeEnsaf,
    };

    console.log(
      "Current users in localStorage:",
      JSON.parse(localStorage.getItem("users"))
    );

    setUsers((users) => {
      const UpdatUsers = [...users, user];
      localStorage.setItem("users", JSON.stringify(UpdatUsers));
      return UpdatUsers;
    });

    console.log("Current users:", [...Users]);
    // Étape 3 : enregistrer le nouvel utilisateur comme connecté
    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/home");
  };

  return (
    <div className="register">
      <form className="form_container" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          name="fullName"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="............."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required
        />
        <div className="btno">
          <button className="validate" type="submit">
            Create account
          </button>
        </div>
        <div className="back">
          <p>Already have an account?</p>
          <NavLink to="/login" className="validate1">
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
}
