import React from "react";
import CardAcaoBase from '../../components/shared/CardAcaoBase';


import { useModal } from '../../context/ModalContext';

const CardNovoLancamento = () => {
  const { abrirModal } = useModal();

  return (
    <CardAcaoBase
      titulo="Novo lançamento"
      corHeader="#5D8165"
      corBody="#C0D7C5"
      iconeSrc="../images/novo-lancamento.svg"
      onClick={abrirModal}
    />
  );
};

export default CardNovoLancamento;
