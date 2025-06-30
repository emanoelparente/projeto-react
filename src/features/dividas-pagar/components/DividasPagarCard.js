import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from "../../../components/shared/CardAcaoBase";
import DividaPagarIcon from '../../../assets/icons/icons-cards/dividas-pagar.svg';

const DividasPagarCard = () => {
  const navigate = useNavigate();

  const irParaDividas = () => {
    navigate("/dividas-pagar");
  };

  return (
    <CardAcaoBase
      titulo="Dívidas a Pagar"
      corHeader="#E37373"
      corBody="#FFF2F2"
      iconeSrc={DividaPagarIcon} 
      onClick={irParaDividas}
    />

  );
};

export default DividasPagarCard;
