import React from "react";
import "./AuthCard.css";

const AuthCard = ({ children, title, subtitle, buttonText, onSubmit }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1 className="brand">feasy</h1>
        <h2>Bem vindo de volta!</h2>
        <p>Faça login e comece a gerenciar seu dinheiro</p>
        <button className="btn-login">{buttonText}</button>
      </div>
      <div className="auth-right">
        <h2>{title}</h2>
        <div className="social-login">
          <button className="btn-social">f</button>
          <button className="btn-social">G</button>
        </div>
        <p>Ou registre com o e-mail</p>
        <form onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthCard;
