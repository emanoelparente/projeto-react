import React from "react";
import CardAcaoBase from "./cardAcaoBase";

const CardExtratoFinanceiro = ({ onClick }) => (
    <CardAcaoBase
      titulo="Extrato Financeiro"
      corHeader="#37A692"
      corBody="#DDF1E5"
      iconeSrc="../images/extrato-financeiro.svg"
      onClick={onClick}
    />
  );

export default CardExtratoFinanceiro;