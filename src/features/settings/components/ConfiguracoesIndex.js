import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper
} from '@mui/material';

import ConfigContaUsuario from './ConfigContaUsuario';
import ConfigPreferenciasFinanceiras from './ConfigPreferenciasFinanceiras';
import ConfigNotificacoes from './ConfigNotificacoes';
import ConfigSegurancaBackup from './ConfigSegurancaBackup';

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function ConfiguracoesIndex() {
  const [abaSelecionada, setAbaSelecionada] = useState(0);

  const handleChange = (_, novaAba) => {
    setAbaSelecionada(novaAba);
  };

  return (
    <Paper sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 4, borderRadius: 2, boxShadow: 3 }}>
      <Box borderBottom={1} borderColor="divider">
        <Tabs
          value={abaSelecionada}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Minha Conta" />
          <Tab label="Preferências Financeiras" />
          <Tab label="Notificações" />
          <Tab label="Segurança e Backup" />
        </Tabs>
      </Box>

      <TabPanel value={abaSelecionada} index={0}>
        <ConfigContaUsuario />
      </TabPanel>
      <TabPanel value={abaSelecionada} index={1}>
        <ConfigPreferenciasFinanceiras />
      </TabPanel>
      <TabPanel value={abaSelecionada} index={2}>
        <ConfigNotificacoes />
      </TabPanel>
      <TabPanel value={abaSelecionada} index={3}>
        <ConfigSegurancaBackup />
      </TabPanel>
    </Paper>
  );
}
