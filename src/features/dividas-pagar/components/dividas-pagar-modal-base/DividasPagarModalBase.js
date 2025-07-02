import React from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Grid,
  Box,
  Tooltip,
  Divider,
  Chip
} from '@mui/material';

const statusColors = {
  'A vencer': {
    chip: 'warning',
    header: '#FFE4B2',
    body: '#FFF5E2',
    color: '#C77800', // Laranja escuro
  },
  'Vencido': {
    chip: 'error',
    header: '#FFD8D8',
    body: '#FFF2F2',
    color: '#C37979', // Vermelho escuro
  },
  'Pago': {
    chip: 'success',
    header: '#B9E49D',
    body: '#ECF6E5',
    color: '#2E7D32', // Verde escuro
  }
};

const DividasPagarModalBase = ({
  aberto,
  titulo,
  dados,
  erros,
  onChange,
  onSalvar,
  onFechar,
  situacao
}) => {
  const status = statusColors[situacao] || {
    chip: 'default',
    header: '#F9F9F9',
    body: '#FFFFFF',
    color: '#000000'
  };

  return (
    <Dialog open={aberto} onClose={onFechar} fullWidth maxWidth="sm">
      {/* Cabeçalho dinâmico */}
      <Box sx={{ backgroundColor: status.header, px: 3, pt: 3, pb: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            component="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              color: status.color,
              m: 0
            }}
          >
            {titulo}
          </Box>
          {situacao && (
            <Chip
              label={situacao}
              color={status.chip}
              sx={{
                height: 24,
                fontSize: '0.75rem',
                fontWeight: 'bold',
                width: 90,
                justifyContent: 'center'
              }}
            />
          )}
        </Box>
        <Divider sx={{ mt: 1 }} />
      </Box>

      {/* Conteúdo com fundo dinâmico */}
      <DialogContent sx={{ backgroundColor: status.body }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ p: 2 }} gap={2}>
          <TextField
            name="nome"
            label="Nome *"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.nome}
            onChange={onChange}
            error={erros.nome}
            helperText={erros.nome ? 'Campo obrigatório' : ''}
          />

          <TextField
            name="descricao"
            label="Descrição"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.descricao}
            onChange={onChange}
          />

          <TextField
            name="credor"
            label="Credor"
            fullWidth
            sx={{ maxWidth: '500px' }}
            value={dados.credor}
            onChange={onChange}
          />

          <TextField
            name="vencimento"
            label="Vencimento *"
            type="date"
            fullWidth
            sx={{ maxWidth: '500px' }}
            InputLabelProps={{ shrink: true }}
            value={dados.vencimento}
            onChange={onChange}
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
                onChange={onChange}
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
                  onChange={onChange}
                  inputProps={{ min: 1, max: 12, style: { textAlign: 'center' } }}
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
            onChange={onChange}
            inputProps={{ min: 0, step: '0.01' }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: '500px', mt: 2, gap: 2 }}>
            <Button variant="outlined" onClick={onFechar} sx={{ fontWeight: 'bold' }}>
              Cancelar
            </Button>
            <Button variant="contained" onClick={onSalvar} sx={{ fontWeight: 'bold' }}>
              Salvar
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DividasPagarModalBase;
