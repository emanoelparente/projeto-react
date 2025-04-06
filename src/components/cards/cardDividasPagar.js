import React from "react";
import CardAcaoBase from "./cardAcaoBase";

const CardDividasPagar = ({ onClick }) => (
    <CardAcaoBase
      titulo="Dividas a pagar"
      corHeader="#E37373"
      corBody="#FFF2F2"
      iconeSrc="../images/dividas-pagar.svg"
      onClick={onClick}
    />
  );

export default CardDividasPagar;