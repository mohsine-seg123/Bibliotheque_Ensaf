import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Registre.css";
import { useNavigate } from "react-router-dom";

export default function Register({Users,setUsers}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [codeEnsaf,setCodeEnsaf]=useState("")



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

    const user={
      fullName: fullName,
      email:email,
      phone:phone,
      password:password,
      codeEnsaf:codeEnsaf,
    }

      console.log(
        "Current users in localStorage:",
        JSON.parse(localStorage.getItem("users"))
      );


   setUsers((users)=>{
      const UpdatUsers=[...users,user];
      localStorage.setItem("users", JSON.stringify(UpdatUsers));
      return UpdatUsers;
   });

    console.log("Current users:", [...Users]);
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
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Put password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required
        />

        <label htmlFor="numero">Phone</label>
        <input
          type="tel"
          id="numero"
          placeholder="Put your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          required
        />

        <label htmlFor="code">Code</label>
        <input
          type="password"
          id="code"
          placeholder="Put your code Ensaf"
          value={codeEnsaf}
          onChange={(e) => setCodeEnsaf(e.target.value)}
          name="code"
          autoComplete="new-password"
          required
        />

        <div className="btno">
          <NavLink to="/login" className="validate">
            Sign in
          </NavLink>
          <button className="validate" type="submit">
            valider
          </button>
        </div>
      </form>
    </div>
  );
}
