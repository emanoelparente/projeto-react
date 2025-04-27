import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from "./cardAcaoBase";

const CardOrcamentoMensal = () => {
  const navigate = useNavigate();

  const irParaOrcamento = () => {
    navigate("/orcamento-mensal"); // ajuste conforme sua rota real
  };

  return (
    <CardAcaoBase
      titulo="Orçamento Mensal"
      corHeader="#4A95DB"
      corBody="#D6EBFF"
      iconeSrc="../images/orcamento-mensal.svg"
      onClick={irParaOrcamento}
    />
  );
};

export default CardOrcamentoMensal;
