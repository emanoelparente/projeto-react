import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from "./cardAcaoBase";

const CardRelatorios = () => {
  const navigate = useNavigate();

  const irParaRelatorios = () => {
    navigate("/relatorios"); // ajuste se sua rota for diferente
  };

  return (
    <CardAcaoBase
      titulo="Relatórios"
      corHeader="#E8B554"
      corBody="#FEEDCC"
      iconeSrc="../images/relatorios.svg"
      onClick={irParaRelatorios}
    />
  );
};

export default CardRelatorios;
