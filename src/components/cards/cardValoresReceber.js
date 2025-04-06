import React from "react";
import CardAcaoBase from "./cardAcaoBase";

const CardValoresReceber = ({ onClick }) => (
    <CardAcaoBase
      titulo="Valores a receber"
      corHeader="#55A630"
      corBody="#E1FFD3"
      iconeSrc="../images/valores-a-receber.svg"
      onClick={onClick}
    />
  );

export default CardValoresReceber;