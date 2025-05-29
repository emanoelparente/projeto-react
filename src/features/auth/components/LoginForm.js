import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = ({ setIsLoginMode }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, senha);
  };

  return (
    <>
      <h1 className="brand">Faça login no feasy</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
        <p className="email-instruction" style={{ color: '#163f23', cursor: 'pointer' }}>Esqueceu sua senha?</p>
        <button type="submit" className="btn-submit">ENTRAR</button>
        <p className="mobile-only-switch">
          Ainda não tem conta? <span onClick={() => setIsLoginMode(false)}>Criar conta</span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
