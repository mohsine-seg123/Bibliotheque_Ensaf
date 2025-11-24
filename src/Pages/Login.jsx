import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";



export default function Login({Users}) {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    function handleSubmit(e){
           e.preventDefault();

        const Exist=Users.find(user=>
            user.email===email && user.password===password
        )

        if(Exist)
            navigate('/home')
        else
            alert('erreur');
    }

  return (
    <div className="login-page">
      <form className="form-container" onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          id="password"
          placeholder="Enter your password"
        />

        <div className="btn">
           <button type="submit" className="login">
               login
           </button>
          <NavLink to="/register" className="creat_account">
            Create Account
          </NavLink>
        </div>
      </form>
    </div>
  );
}
