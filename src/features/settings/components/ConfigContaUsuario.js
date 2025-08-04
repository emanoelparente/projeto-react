import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export default function ConfigContaUsuario() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Informações da Conta</Typography>

      <TextField
        fullWidth
        label="Nome"
        margin="normal"
      />

      <TextField
        fullWidth
        label="E-mail"
        margin="normal"
      />

      <TextField
        fullWidth
        label="Nova Senha"
        type="password"
        margin="normal"
      />

      <Box mt={2}>
        <Button variant="contained" color="primary">
          Salvar Alterações
        </Button>
      </Box>
    </Box>
  );
}
