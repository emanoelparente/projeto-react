// src/pages/ajuda/AjudaIndex.js
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AjudaIndex() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Central de Ajuda
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Bem-vindo à Central de Ajuda. Aqui você encontra respostas para as dúvidas mais comuns
        e pode entrar em contato com nossa equipe de suporte.
      </Typography>

      <Stack spacing={2}>
        <Button component={Link} to="/ajuda/faq" variant="outlined">
          Perguntas Frequentes
        </Button>
        <Button component={Link} to="/ajuda/contato" variant="outlined">
          Contato com Suporte
        </Button>
      </Stack>
    </Box>
  );
}
