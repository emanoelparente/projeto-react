import React, { useState } from "react";

const RegisterForm = ({ setIsLoginMode }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrando (simulado):", { nome, email, senha });
    setIsLoginMode(true); // volta para login após cadastrar
  };

  return (
    <>
      <h2 className="brand">Criar uma conta</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
        <input type="password" placeholder="Confirmar senha" required />
        <button type="submit" className="btn-submit">REGISTRAR</button>
        <p className="mobile-only-switch">
          Já tem uma conta? <span onClick={() => setIsLoginMode(true)}>Fazer login</span>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
