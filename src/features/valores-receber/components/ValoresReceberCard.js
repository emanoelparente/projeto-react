import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from '../../../components/shared/CardAcaoBase';
import ValoresReceberIcon from '../../../assets/icons/icons-cards/valores-a-receber.svg';

const ValoresReceberCard = () => {
  const navigate = useNavigate();

  const irParaValoresReceber = () => {
    navigate("/valores-a-receber"); // ajuste conforme a sua rota
  };

  return (
    <CardAcaoBase
      titulo="Valores a Receber"
      corHeader="#55A630"
      corBody="#E1FFD3"
      iconeSrc={ValoresReceberIcon}
      onClick={irParaValoresReceber}
    />
  );
};

export default ValoresReceberCard;
