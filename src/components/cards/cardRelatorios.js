import React from "react";
import CardAcaoBase from "./cardAcaoBase";

const CardRelatorios = ({ onClick }) => (
    <CardAcaoBase
      titulo="Relatorios"
      corHeader="#E8B554"
      corBody="#FEEDCC"
      iconeSrc="../images/relatorios.svg"
      onClick={onClick}
    />
  );

export default CardRelatorios;