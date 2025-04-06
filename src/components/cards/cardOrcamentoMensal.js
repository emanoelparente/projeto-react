import React from "react";
import CardAcaoBase from "./cardAcaoBase";

const CardOrcamentoMensal = ({ onClick }) => (
    <CardAcaoBase
      titulo="Orçamento Mensal"
      corHeader="#4A95DB"
      corBody="#D6EBFF"
      iconeSrc="../images/orcamento-mensal.svg"
      onClick={onClick}
    />
  );

export default CardOrcamentoMensal;