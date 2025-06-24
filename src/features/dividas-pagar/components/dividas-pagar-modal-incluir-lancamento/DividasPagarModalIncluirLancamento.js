import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Grid, InputAdornment
} from '@mui/material';
import dayjs from 'dayjs';

const DividasPagarModalIncluirLancamento = ({ aberto, onFechar, onSalvar }) => {
  const [dados, setDados] = useState({
    nome: '',
    descricao: '',
    valorTotal: '',
    numeroParcelas: 1,
    valorParcela: '',
    dataVencimento: '',
    credor: ''
  });

  // Atualiza valor da parcela quando valorTotal ou numeroParcelas muda
  useEffect(() => {
    const { valorTotal, numeroParcelas } = dados;
    if (valorTotal && numeroParcelas) {
      const novoValorParcela = parseFloat(valorTotal) / parseInt(numeroParcelas);
      setDados(prev => ({
        ...prev,
        valorParcela: isFinite(novoValorParcela) ? novoValorParcela.toFixed(2) : ''
      }));
    }
  }, [dados.valorTotal, dados.numeroParcelas]);

  // Atualiza valor total se a parcela for alterada manualmente
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'valorParcela') {
      const novoValorTotal = parseFloat(value) * parseInt(dados.numeroParcelas || 1);
      setDados(prev => ({
        ...prev,
        valorParcela: value,
        valorTotal: isFinite(novoValorTotal) ? novoValorTotal.toFixed(2) : ''
      }));
    } else if (name === 'numeroParcelas') {
      const parcelas = Math.max(1, Math.min(parseInt(value), 12)); // limite entre 1 e 12
      setDados(prev => ({ ...prev, [name]: parcelas }));
    } else {
      setDados(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSalvar = () => {
    const parcelas = [];

    for (let i = 1; i <= dados.numeroParcelas; i++) {
      parcelas.push({
        id: `${Date.now()}-${i}`, // ID único fictício
        nome: dados.nome,
        descricao: `${dados.descricao} (Parcela ${i}/${dados.numeroParcelas})`,
        valor: parseFloat(dados.valorParcela),
        dataVencimento: dayjs(dados.dataVencimento).add(i - 1, 'month').format('YYYY-MM-DD'),
        credor: dados.credor
      });
    }

    onSalvar(parcelas);
    setDados({
      nome: '',
      descricao: '',
      valorTotal: '',
      numeroParcelas: 1,
      valorParcela: '',
      dataVencimento: '',
      credor: ''
    });
    onFechar();
  };

  return (
    <Dialog open={aberto} onClose={onFechar} maxWidth="sm" fullWidth>
      <DialogTitle>Nova Dívida</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nome" name="nome" fullWidth value={dados.nome} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Descrição" name="descricao" fullWidth value={dados.descricao} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Valor Total"
              name="valorTotal"
              fullWidth
              type="number"
              value={dados.valorTotal}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Número de Parcelas"
              name="numeroParcelas"
              type="number"
              fullWidth
              inputProps={{ min: 1, max: 12 }}
              value={dados.numeroParcelas}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Valor da Parcela"
              name="valorParcela"
              fullWidth
              type="number"
              value={dados.valorParcela}
              onChange={handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Data de Vencimento da 1ª Parcela"
              name="dataVencimento"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              value={dados.dataVencimento}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Credor" name="credor" fullWidth value={dados.credor} onChange={handleChange} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onFechar}>Cancelar</Button>
        <Button onClick={handleSalvar} variant="contained">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DividasPagarModalIncluirLancamento;
