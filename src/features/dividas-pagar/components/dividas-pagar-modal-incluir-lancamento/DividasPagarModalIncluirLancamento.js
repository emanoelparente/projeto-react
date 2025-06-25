import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
  Box,
  Tooltip
} from '@mui/material';

const DividasPagarModalIncluirLancamento = ({ aberto, onFechar, onSalvar }) => {
  const [dados, setDados] = useState({
    nome: '',
    descricao: '',
    valorTotal: '',
    numeroParcelas: 1,
    valorParcela: '',
    vencimento: '',
    credor: ''
  });

  // Atualiza dados e calcula valores relacionados
  const handleChange = (e) => {
    const { name, value } = e.target;

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
    onSalvar(dados);
    onFechar();
  };

  return (
    <Dialog open={aberto} onClose={onFechar} fullWidth maxWidth="sm" PaperProps={{ sx: { overflowX: 'hidden' } }}>
      <DialogTitle sx={{ fontWeight: 'bold', px: 3, pt: 3 }}>Adicionar nova dívida</DialogTitle>
      <DialogContent sx={{ px: 3, pb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="nome"
              label="Nome"
              placeholder="Ex.: Telefone"
              fullWidth
              value={dados.nome}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              name="valorTotal"
              label="Valor Total"
              placeholder="Valor total da dívida"
              type="number"
              fullWidth
              value={dados.valorTotal}
              onChange={handleChange}
              margin="normal"
              inputProps={{ min: 0, step: '0.01' }}
            />
            <TextField
              name="vencimento"
              label="Vencimento"
              type="date"
              fullWidth
              value={dados.vencimento}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="descricao"
              label="Descrição"
              placeholder="Ex.: Telefone novo comprado no shopping"
              fullWidth
              multiline
              rows={4}
              value={dados.descricao}
              onChange={handleChange}
              margin="normal"
            />
            <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
              <Grid item xs={5}>
                <Tooltip title="Máximo 12 parcelas">
                  <TextField
                    name="numeroParcelas"
                    label="Parcelas"
                    type="number"
                    inputProps={{ min: 1, max: 12, style: { textAlign: 'center' } }}
                    fullWidth
                    value={dados.numeroParcelas}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Tooltip>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  name="valorParcela"
                  label="Valor da Parcela"
                  placeholder="Ex: R$ 20,52"
                  type="number"
                  fullWidth
                  value={dados.valorParcela}
                  onChange={handleChange}
                  margin="normal"
                  inputProps={{ min: 0, step: '0.01' }}
                />
              </Grid>
            </Grid>
            <TextField
              name="credor"
              label="Credor"
              placeholder="A quem eu devo"
              fullWidth
              value={dados.credor}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
          <Button variant="outlined" onClick={onFechar} sx={{ fontWeight: 'bold' }}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleSalvar} sx={{ fontWeight: 'bold' }}>
            Salvar
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DividasPagarModalIncluirLancamento;
