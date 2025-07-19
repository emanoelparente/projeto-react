import React from 'react';
import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button, Typography, Box
} from '@mui/material';

const DividasPagarModalQuitarLancamento = ({ aberto, onFechar, divida, onQuitarComSaldo, onQuitarManual }) => {
  if (!divida) return null;

  return (
    <Dialog open={aberto} onClose={onFechar} maxWidth="xs" fullWidth>
      <DialogTitle>Quitar: {divida.nome}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Você deseja quitar esta dívida usando o saldo do sistema ou deseja registrar a quitação manualmente?
        </Typography>

        <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
          <Typography variant="body2"><strong>Credor:</strong> {divida.credor}</Typography>
          <Typography variant="body2"><strong>Valor:</strong> R$ {divida.valorTotal}</Typography>
          <Typography variant="body2"><strong>Vencimento:</strong> {divida.vencimento}</Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onQuitarManual} color="secondary">Quitar manualmente</Button>
        <Button onClick={onQuitarComSaldo} variant="contained" color="primary">Quitar com saldo</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DividasPagarModalQuitarLancamento;
