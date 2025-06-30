import React from "react";
import { useNavigate } from "react-router-dom";
import CardAcaoBase from '../../../components/shared/CardAcaoBase';
import RelatorioFinanceiroIcon from '../../../assets/icons/icons-cards/relatorios.svg';

const RelatoriosFinanceirosCard = () => {
  const navigate = useNavigate();

  const irParaRelatorios = () => {
    navigate("/relatorios"); // ajuste se sua rota for diferente
  };

  return (
    <CardAcaoBase
      titulo="Relatórios"
      corHeader="#E8B554"
      corBody="#FEEDCC"
      iconeSrc={RelatorioFinanceiroIcon}
      onClick={irParaRelatorios}
    />
  );
};

export default RelatoriosFinanceirosCard;
