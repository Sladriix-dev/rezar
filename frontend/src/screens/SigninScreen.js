import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: signin action
  };

  return (
    <div className="signin">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Se connecter à Razer ID</h1>
        </div>
        <div>
          <input
            type="email"
            id="email"
            reuquired
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="email_label">Email</label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            reuquired
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="pwd_label">Mot de passe</label>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Connexion
          </button>
        </div>
        <div>
          <label />
          <div>
            Pas de compte ? {""}
            <Link to="/register">Créer votre compte</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
