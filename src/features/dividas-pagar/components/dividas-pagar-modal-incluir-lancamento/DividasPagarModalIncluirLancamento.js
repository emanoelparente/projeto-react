import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
  Box,
  Tooltip,
  Divider
} from '@mui/material';

const DividasPagarModalIncluirLancamento = ({ aberto, onFechar, onSalvar }) => {
  const [dados, setDados] = useState({
    nome: '',
    descricao: '',
    credor: '',
    vencimento: '',
    valorTotal: '',
    numeroParcelas: 1,
    valorParcela: ''
  });

  const [erros, setErros] = useState({});

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
      let parcelas = Math.min(Math.max(Number(value) || 1, 1), 12);
      const total = parseFloat(dados.valorTotal) || 0;
      const valorParcela = parcelas ? total / parcelas : '';
      setDados((prev) => ({
        ...prev,
        numeroParcelas: parcelas,
        valorParcela: valorParcela ? valorParcela.toFixed(2) : ''
      }));
    } else if (name === 'valorTotal') {
      const total = parseFloat(value) || 0;
      const parcelas = Number(dados.numeroParcelas) || 1;
      const valorParcela = parcelas ? total / parcelas : '';
      setDados((prev) => ({
        ...prev,
        valorTotal: value,
        valorParcela: valorParcela ? valorParcela.toFixed(2) : ''
      }));
    } else {
      setDados((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSalvar = () => {
    const camposObrigatorios = ['nome', 'valorTotal', 'vencimento'];
    const novosErros = {};

    camposObrigatorios.forEach((campo) => {
      if (!dados[campo] || dados[campo].toString().trim() === '') {
        novosErros[campo] = true;
      }
    });

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) return;

    onSalvar(dados);
    onFechar();
  };

  return (
    <Dialog open={aberto} onClose={onFechar} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          px: 3,
          pt: 3,
          color: '#77AF51'
        }}
      >
        Adicionar nova dívida
      </DialogTitle>

      <Divider sx={{ mx: 3, mb: 1 }} />

      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ p: 2 }} gap={2}>
          <TextField
            name="nome"
            label="Nome *"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.nome}
            onChange={handleChange}
            error={erros.nome}
            helperText={erros.nome ? 'Campo obrigatório' : ''}
          />

          <TextField
            name="descricao"
            label="Descrição"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.descricao}
            onChange={handleChange}
          />

          <TextField
            name="credor"
            label="Credor"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.credor}
            onChange={handleChange}
          />

          <TextField
            name="vencimento"
            label="Vencimento *"
            type="date"
            fullWidth
            sx={{ maxWidth: '500px' }}
            InputLabelProps={{ shrink: true }}
            value={dados.vencimento}
            onChange={handleChange}
            error={erros.vencimento}
            helperText={erros.vencimento ? 'Campo obrigatório' : ''}
          />

          <Grid container spacing={2} sx={{ maxWidth: '500px' }}>
            <Grid item xs={6}>
              <TextField
                name="valorTotal"
                label="Valor Total *"
                type="number"
                fullWidth
                value={dados.valorTotal}
                onChange={handleChange}
                error={erros.valorTotal}
                helperText={erros.valorTotal ? 'Campo obrigatório' : ''}
                inputProps={{ min: 0, step: '0.01' }}
              />
            </Grid>
            <Grid item xs={6}>
              <Tooltip title="Máximo 12 parcelas">
                <TextField
                  name="numeroParcelas"
                  label="Parcelas"
                  type="number"
                  fullWidth
                  value={dados.numeroParcelas}
                  onChange={handleChange}
                  inputProps={{
                    min: 1,
                    max: 12,
                    style: { textAlign: 'center' }
                  }}
                />
              </Tooltip>
            </Grid>
          </Grid>

          <TextField
            name="valorParcela"
            label="Valor da Parcela"
            type="number"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.valorParcela}
            onChange={handleChange}
            inputProps={{ min: 0, step: '0.01' }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              maxWidth: '500px',
              mt: 2,
              gap: 2
            }}
          >
            <Button variant="outlined" onClick={onFechar} sx={{ fontWeight: 'bold' }}>
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleSalvar} sx={{ fontWeight: 'bold' }}>
              Salvar
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DividasPagarModalIncluirLancamento;
