import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from "../../../components/shared/CardAcaoBase";
import ExtratoFinanceiroIcon from '../../../assets/icons/icons-cards/extrato-financeiro.svg';

const ExtratoFinanceiroCard = () => {
  const navigate = useNavigate();

  const irParaExtrato = () => {
    navigate("/extrato-financeiro"); // ou a rota que você configurou para ExtratoFinanceiroPage.js
  };

  return (
    <CardAcaoBase
      titulo="Extrato Financeiro"
      corHeader="#37A692"
      corBody="#DDF1E5"
      iconeSrc={ExtratoFinanceiroIcon}
      onClick={irParaExtrato}
    />
  );
};

export default ExtratoFinanceiroCard;
