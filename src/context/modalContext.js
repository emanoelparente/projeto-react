import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalAberto, setModalAberto] = useState(false);
  const [dadosIniciais, setDadosIniciais] = useState(null);

  const abrirModal = (dados = null) => {
    setDadosIniciais(dados);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setDadosIniciais(null);
  };

  return (
    <ModalContext.Provider value={{ modalAberto, abrirModal, fecharModal, dadosIniciais }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
