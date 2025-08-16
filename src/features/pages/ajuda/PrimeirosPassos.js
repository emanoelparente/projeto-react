// src/pages/ajuda/PrimeirosPassos.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function PrimeirosPassos() {
  return (
    <Box sx={{ p: 3 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          background: "linear-gradient(135deg, #77AF51, #c6da56ff)",
          color: "#fff",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Primeiros Passos
        </Typography>
      </Paper>

      <Box
        mt={3}
        sx={{
          '@media (min-width:1017px)': {
            px: 10,
          },
          color: '#212529',
          fontSize: '0.90rem',
          '& h6': {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: 1,
            color: '#6a994e',
          },
          '& p': {
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: 3,
          },
        }}
      >
        <Typography variant="h6">Crie sua conta</Typography>
        <Typography>
          Clique em "Registrar" e preencha seus dados básicos para criar sua conta.
        </Typography>

        <Typography variant="h6">Complete seu perfil</Typography>
        <Typography>
          No painel de configurações, insira informações adicionais como foto, endereço
          e preferências de uso.
        </Typography>

        <Typography variant="h6">Explore o painel</Typography>
        <Typography>
          Navegue pelo menu lateral para conhecer todas as funcionalidades disponíveis
          no sistema.
        </Typography>
      </Box>
    </Box>
  );
}
