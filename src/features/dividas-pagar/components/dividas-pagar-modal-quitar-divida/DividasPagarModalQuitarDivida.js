import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, Box, Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel
} from '@mui/material';

const DividasPagarModalQuitarLancamento = ({
  aberto,
  onFechar,
  divida,
  onQuitar
}) => {
  const [tipoBaixa, setTipoBaixa] = useState('comSaldo');

  if (!divida) return null;

  const handleQuitar = () => {
    onQuitar({
      tipoBaixa,
      divida,
    });
    onFechar();
  };

  return (
    <Dialog open={aberto} onClose={onFechar} maxWidth="sm" fullWidth>
      <DialogTitle>Quitar: {divida.nome}</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 1, mb: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
          <Typography variant="body2"><strong>Credor:</strong> {divida.credor}</Typography>
          <Typography variant="body2"><strong>Valor:</strong> R$ {divida.valorTotal}</Typography>
          <Typography variant="body2"><strong>Vencimento:</strong> {divida.vencimento}</Typography>
        </Box>

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Tipo de baixa</FormLabel>
          <RadioGroup
            value={tipoBaixa}
            onChange={(e) => setTipoBaixa(e.target.value)}
          >
            <FormControlLabel
              value="comSaldo"
              control={<Radio />}
              label="Quitar com saldo da conta"
            />
            <FormControlLabel
              value="semSaldo"
              control={<Radio />}
              label="Quitar sem utilizar saldo da conta"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>

      <DialogActions>
        <Button onClick={onFechar} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleQuitar} variant="contained" color="primary">
          Confirmar quitaçãoA
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DividasPagarModalQuitarLancamento;
