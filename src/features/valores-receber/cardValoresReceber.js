import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from '../../components/shared/cardAcaoBase';


const CardValoresReceber = () => {
  const navigate = useNavigate();

  const irParaValoresReceber = () => {
    navigate("/valores-a-receber"); // ajuste conforme a sua rota
  };

  return (
    <CardAcaoBase
      titulo="Valores a Receber"
      corHeader="#55A630"
      corBody="#E1FFD3"
      iconeSrc="../images/valores-a-receber.svg"
      onClick={irParaValoresReceber}
    />
  );
};

export default CardValoresReceber;
