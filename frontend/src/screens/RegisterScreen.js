import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";

export default function RegisterScreen(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas !')
    } else {
       dispatch(register(name, email, password));
    }
   
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="signin">
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Inscription à Razer ID</h1>
        </div>
        <div>
          <input
            type="text"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="first_label">
            Nom d'utilisateur
          </label>
        </div>
        <div>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="second_label">
            Email
          </label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="third_label">
            Mot de passe
          </label>
        </div>
        <div>
          <input
            type="password"
            id="confirmPassword"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="fourth_label">
            Confirmez votre mot de passe
          </label>
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
            Déjà à un compte ? {""}
            <Link to={`/signin?redirect=${redirect}`}>Connectez-vous</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
