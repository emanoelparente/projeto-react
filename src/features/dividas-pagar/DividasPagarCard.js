import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from "../../components/shared/CardAcaoBase";

const DividasPagarCard = () => {
  const navigate = useNavigate();

  const irParaDividas = () => {
    navigate("/dividas-pagar"); // ou a rota que você configurou para dividasPagar.js
  };

  return (
    <CardAcaoBase
      titulo="Dívidas a Pagar"
      corHeader="#E37373"
      corBody="#FFF2F2"
      iconeSrc="../images/dividas-pagar.svg"
      onClick={irParaDividas}
    />
  );
};

export default DividasPagarCard;
