// src/pages/TermoDeUsoPage.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function TermosDeUsoPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Termos de Uso
      </Typography>
      <Typography variant="body1">
        Estes são os termos e condições de uso da aplicação. Ao utilizar este sistema, você concorda com as regras aqui descritas.
      </Typography>
    </Box>
  );
}
