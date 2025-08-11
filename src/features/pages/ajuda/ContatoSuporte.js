// src/pages/ajuda/ContatoSuporte.js
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function ContatoSuporte() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Contato com Suporte
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Envie sua dúvida ou problema para nossa equipe. Responderemos o mais rápido possível.
      </Typography>

      <TextField label="Seu Nome" fullWidth margin="normal" />
      <TextField label="Seu E-mail" fullWidth margin="normal" />
      <TextField
        label="Mensagem"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />

      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </Box>
  );
}
