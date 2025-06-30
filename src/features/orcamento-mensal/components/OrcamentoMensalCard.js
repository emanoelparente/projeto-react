import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from '../../../components/shared/CardAcaoBase';
import OrcamentoMensalIcon from '../../../assets/icons/icons-cards/orcamento-mensal.svg';

const OrcamentoMensalCard = () => {
  const navigate = useNavigate();

  const irParaOrcamento = () => {
    navigate("/orcamento-mensal"); // ajuste conforme sua rota real
  };

  return (
    <CardAcaoBase
      titulo="Orçamento Mensal"
      corHeader="#4A95DB"
      corBody="#D6EBFF"
      iconeSrc={OrcamentoMensalIcon}
      onClick={irParaOrcamento}
    />
  );
};

export default OrcamentoMensalCard;
