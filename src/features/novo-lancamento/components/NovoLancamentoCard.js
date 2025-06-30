import React from "react";
import CardAcaoBase from '../../../components/shared/CardAcaoBase';
import NovoLancamentoIcon from '../../../assets/icons/icons-cards/novo-lancamento.svg';

import { useModal } from '../../../context/ModalContext';

const NovoLancamentoCard = () => {
  const { abrirModal } = useModal();

  return (
    <CardAcaoBase
      titulo="Novo lançamento"
      corHeader="#5D8165"
      corBody="#C0D7C5"
      iconeSrc={NovoLancamentoIcon}
      onClick={abrirModal}
    />
  );
};

export default NovoLancamentoCard;
