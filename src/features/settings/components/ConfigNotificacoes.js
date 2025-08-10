// src/features/settings/components/ConfigNotificacoes.js
import React from 'react';
import { Box, Typography, Divider, FormControlLabel, Switch } from '@mui/material';

export default function ConfigNotificacoes() {
  return (
    <Box>
      <Divider sx={{ my: 2 }} />

      {/* Seção: Notificações */}
      <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
        📩 Notificações
      </Typography>

      <FormControlLabel control={<Switch defaultChecked />} label="Avisar contas a pagar" />
      <FormControlLabel control={<Switch />} label="Avisar contas a receber" />
    </Box>
  );
}
