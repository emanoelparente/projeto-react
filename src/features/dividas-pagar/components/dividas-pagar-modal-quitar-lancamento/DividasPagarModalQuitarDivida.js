import React, { useState, useEffect } from 'react';
import DividasPagarModalBase from '../dividas-pagar-modal-base/DividasPagarModalBase';
import ModalNovaDespesa from '../../lancamentos/modais/ModalNovaDespesa'; // ajuste o caminho conforme seu projeto
import { Button, Box, Typography } from '@mui/material';

const DividasPagarModalQuitarDivida = ({ aberto, onFechar, divida, onSalvar }) => {
  const [dados, setDados] = useState({ ...divida });
  const [usarSaldo, setUsarSaldo] = useState(false);
  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (divida) {
      setDados(divida);
    }
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

  const handleQuitarComSaldo = () => {
    setModalConfirmacaoAberto(true);
  };

  const handleSalvarDespesa = (lancamento) => {
    onSalvar && onSalvar(lancamento);
    setModalConfirmacaoAberto(false);
    onFechar();
  };

  const handleSalvarManual = () => {
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
    <>
      <DividasPagarModalBase
        aberto={aberto}
        titulo={`Quitar "${dados?.nome || ''}"`}
        dados={dados}
        erros={erros}
        onChange={handleChange}
        onSalvar={usarSaldo ? handleQuitarComSaldo : handleSalvarManual}
        onFechar={onFechar}
        situacao={dados.situacao}
        conteudoExtra={
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant={usarSaldo ? 'contained' : 'outlined'}
              color="success"
              onClick={() => setUsarSaldo(true)}
            >
              Usar saldo do sistema
            </Button>
            <Button
              variant={!usarSaldo ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setUsarSaldo(false)}
            >
              Não usar saldo
            </Button>
          </Box>
        }
      />

      {usarSaldo && (
        <ModalNovaDespesa
          aberto={modalConfirmacaoAberto}
          onFechar={() => setModalConfirmacaoAberto(false)}
          dadosIniciais={{
            nome: `Quitação: ${dados.nome}`,
            descricao: dados.descricao,
            valor: dados.valorTotal,
            data: dados.vencimento,
            categoria: 'Quitação de dívida',
            formaPagamento: 'Saldo do sistema'
          }}
          onSalvar={handleSalvarDespesa}
        />
      )}
    </>
  );
};

export default DividasPagarModalQuitarDivida;
