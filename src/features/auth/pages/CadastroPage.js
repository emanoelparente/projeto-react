import React from "react";
import AuthCard from "../components/AuthCard";

const CadastroPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Cadastrar usuário...");
  };

  return (
    <AuthCard
      title="Criar uma conta"
      buttonText="LOGIN"
      onSubmit={handleRegister}
    >
      <input type="text" placeholder="Nome" required />
      <input type="email" placeholder="E-mail" required />
      <input type="password" placeholder="Senha" required />
      <input type="password" placeholder="Confirmar senha" required />
      <button type="submit" className="btn-submit">REGISTRAR</button>
    </AuthCard>
  );
};

export default CadastroPage;
