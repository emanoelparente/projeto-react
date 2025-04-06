// components/cards/CardNovoLancamento.js
import React from "react";
import CardAcaoBase from "./cardAcaoBase";

const CardNovoLancamento = () => {
  const handleClick = () => {
    console.log("Novo lançamento clicado!");
    // aqui você pode abrir modal, redirecionar etc.
  };

  return (
    <CardAcaoBase
      titulo="Novo lançamento"
      corHeader="#5D8165"
      corBody="#C0D7C5"
      iconeSrc="../images/novo-lancamento.svg"
      onClick={handleClick}
    />
  );
};

export default CardNovoLancamento;