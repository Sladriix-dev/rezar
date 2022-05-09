import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";

export default function SigninScreen(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading,error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if(userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="signin">
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
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
          <label htmlFor="email" className="email_label">
            Email
          </label>
        </div>
        <div>
          <input
            type="password"
            id="password"
            reuquired
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="pwd_label">
            Mot de passe
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
            Pas de compte ? {""}
            <Link to="/register">Créer votre compte</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
