import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from "./cardAcaoBase";


const CardExtratoFinanceiro = () => {
  const navigate = useNavigate();

  const irParaExtrato = () => {
    navigate("/extrato-financeiro"); // ou a rota que você configurou para extratoFinanceiro.js
  };

  return (
    <CardAcaoBase
      titulo="Extrato Financeiro"
      corHeader="#37A692"
      corBody="#DDF1E5"
      iconeSrc="../images/extrato-financeiro.svg"
      onClick={irParaExtrato}
    />
  );
};

export default CardExtratoFinanceiro;
