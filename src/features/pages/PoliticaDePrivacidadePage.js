// src/pages/PoliticaDePrivacidadePage.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function PoliticaDePrivacidadePage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Política de Privacidade
      </Typography>
      <Typography variant="body1">
        Esta é a página de política de privacidade. Aqui explicaremos como seus dados são
        coletados, utilizados e protegidos pelo sistema.
      </Typography>
    </Box>
  );
}
