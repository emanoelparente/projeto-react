import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography, Box, Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel, Fade
} from '@mui/material';

import { useModal } from '../../../../context/ModalContext';

const DividasPagarModalQuitarDivida = ({
  aberto,
  onFechar,
  divida,
  onQuitar
}) => {
  const [tipoBaixa, setTipoBaixa] = useState('');
  const { abrirModal } = useModal();

  if (!divida) return null;

  const isConfirmarDisabled = tipoBaixa === '';

  const handleQuitar = () => {
    if (tipoBaixa === 'comSaldo') {
      abrirModal({
        tipo: 'Despesa',
        categoria: '',
        forma: '',
        data: new Date().toISOString().split('T')[0],
        valor: divida.valorTotal,
        descricao: `Quitação dívida: ${divida.nome}`,
      });
      onFechar();
    } else if (tipoBaixa === 'semSaldo') {
      onQuitar({ tipoBaixa, divida });
      onFechar();
    }
  };

  return (
    <Dialog open={aberto} onClose={onFechar} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: '#48673A', color: '#FFFFFF', fontWeight: 'bold' }}>
        Quitar: {divida.nome}
      </DialogTitle>

      <DialogContent sx={{ backgroundColor: '#F8F8F8', px: 4, py: 3 }}>
        <Box sx={{ mb: 3, p: 2, border: '1px solid #DDD', borderRadius: 2, backgroundColor: '#FFFFFF' }}>
          <Typography variant="body2" sx={{ color: '#565656' }}>
            <strong>Credor:</strong> {divida.credor}
          </Typography>
          <Typography variant="body2" sx={{ color: '#565656' }}>
            <strong>Valor:</strong> R$ {divida.valorTotal}
          </Typography>
          <Typography variant="body2" sx={{ color: '#565656' }}>
            <strong>Vencimento:</strong> {divida.vencimento}
          </Typography>
        </Box>

        <FormControl component="fieldset" required>
          <FormLabel component="legend" sx={{ color: '#48673A', fontWeight: 'bold', mb: 1 }}>
            Tipo de quitação
          </FormLabel>
          <RadioGroup
            value={tipoBaixa}
            onChange={(e) => setTipoBaixa(e.target.value)}
          >
            <Box sx={{
              border: `2px solid ${tipoBaixa === 'comSaldo' ? '#77AF51' : '#CCC'}`,
              borderRadius: 2,
              px: 2, py: 1, mb: 2,
              backgroundColor: tipoBaixa === 'comSaldo' ? '#F0F8EF' : '#FFF'
            }}>
              <FormControlLabel
                value="comSaldo"
                control={<Radio />}
                label={<Typography sx={{ fontWeight: 'bold', color: '#565656' }}>Quitar com saldo da conta</Typography>}
              />
              {tipoBaixa === 'comSaldo' && (
                <Fade in>
                  <Typography variant="caption" sx={{ color: '#565656', pl: 4 }}>
                    Essa opção lançará uma nova despesa automaticamente utilizando os dados da dívida.
                  </Typography>
                </Fade>
              )}
            </Box>

            <Box sx={{
              border: `2px solid ${tipoBaixa === 'semSaldo' ? '#77AF51' : '#CCC'}`,
              borderRadius: 2,
              px: 2, py: 1,
              backgroundColor: tipoBaixa === 'semSaldo' ? '#F0F8EF' : '#FFF'
            }}>
              <FormControlLabel
                value="semSaldo"
                control={<Radio />}
                label={<Typography sx={{ fontWeight: 'bold', color: '#565656' }}>Quitar sem utilizar o saldo da conta</Typography>}
              />
              {tipoBaixa === 'semSaldo' && (
                <Fade in>
                  <Typography variant="caption" sx={{ color: '#565656', pl: 4 }}>
                    Essa opção quitará a dívida apenas para fins de controle, sem impactar o saldo.
                  </Typography>
                </Fade>
              )}
            </Box>
          </RadioGroup>
        </FormControl>
      </DialogContent>

      <DialogActions sx={{ px: 4, pb: 3, backgroundColor: '#F8F8F8' }}>
        <Button
          onClick={onFechar}
          variant="outlined"
          sx={{
            borderColor: '#48673A',
            color: '#48673A',
            '&:hover': {
              backgroundColor: '#EBF4E8',
              borderColor: '#48673A',
            }
          }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleQuitar}
          variant="contained"
          disabled={isConfirmarDisabled}
          sx={{
            backgroundColor: '#77AF51',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#659743',
            }
          }}
        >
          {tipoBaixa === 'comSaldo'
            ? 'Próximo'
            : tipoBaixa === 'semSaldo'
              ? 'Confirmar quitação'
              : 'Confirmar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DividasPagarModalQuitarDivida;
