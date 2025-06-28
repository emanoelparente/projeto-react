import React, { useState, useEffect } from 'react';
import DividasPagarModalBase from '../dividas-pagar-modal-base/DividasPagarModalBase';

const DividasPagarModalEditarLancamento = ({ aberto, onFechar, onSalvar, divida }) => {
  const [dados, setDados] = useState({ ...divida });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (divida) setDados(divida);
  }, [divida]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErros((prev) => ({ ...prev, [name]: false }));

    if (name === 'valorParcela') {
      const parcelas = Number(dados.numeroParcelas) || 1;
      const total = parseFloat(value) * parcelas || '';
      setDados((prev) => ({
        ...prev,
        valorParcela: value,
        valorTotal: total ? total.toFixed(2) : ''
      }));
    } else if (name === 'numeroParcelas') {
      const parcelas = Math.min(Math.max(Number(value) || 1, 1), 12);
      const total = parseFloat(dados.valorTotal) || 0;
      const valorParcela = total / parcelas;
      setDados((prev) => ({
        ...prev,
        numeroParcelas: parcelas,
        valorParcela: isFinite(valorParcela) ? valorParcela.toFixed(2) : ''
      }));
    } else if (name === 'valorTotal') {
      const total = parseFloat(value) || 0;
      const parcelas = Number(dados.numeroParcelas) || 1;
      const valorParcela = total / parcelas;
      setDados((prev) => ({
        ...prev,
        valorTotal: value,
        valorParcela: isFinite(valorParcela) ? valorParcela.toFixed(2) : ''
      }));
    } else {
      setDados((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSalvar = () => {
    const camposObrigatorios = ['nome', 'valorTotal', 'vencimento'];
    const novosErros = {};

    camposObrigatorios.forEach((campo) => {
      if (!dados[campo]?.toString().trim()) {
        novosErros[campo] = true;
      }
    });

    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    onSalvar(dados);
    onFechar();
  };

  return (
    <DividasPagarModalBase
      aberto={aberto}
      titulo={`Editar ${dados?.nome || ''}`}
      dados={dados}
      erros={erros}
      onChange={handleChange}
      onSalvar={handleSalvar}
      onFechar={onFechar}
    />
  );
};

export default DividasPagarModalEditarLancamento;
