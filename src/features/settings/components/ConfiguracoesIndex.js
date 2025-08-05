import React from 'react';
import {
  Box,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Paper,
  Typography
} from '@mui/material';
import {
  Person,
  Notifications,
  SettingsBackupRestore,
  Shield
} from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

import ConfigContaUsuario from './ConfigContaUsuario';
import ConfigNotificacoes from './ConfigNotificacoes';
import ConfigPreferenciasFinanceiras from './ConfigPreferenciasFinanceiras';
import ConfigSegurancaBackup from './ConfigSegurancaBackup';

const abas = [
  { label: 'Preferências', value: 'preferencias', icon: <SettingsBackupRestore fontSize="small" /> },
  { label: 'Usuário', value: 'usuario', icon: <Person fontSize="small" /> },
  { label: 'Notificações', value: 'notificacoes', icon: <Notifications fontSize="small" /> },
  { label: 'Segurança e Backup', value: 'seguranca', icon: <Shield fontSize="small" /> },
];

const ConfiguracoesIndex = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchParams, setSearchParams] = useSearchParams();
  const abaAtiva = searchParams.get('aba') || 'preferencias';

  const handleChange = (_, novaAba) => {
    setSearchParams({ aba: novaAba });
  };

  const renderConteudo = () => {
    switch (abaAtiva) {
      case 'usuario':
        return <ConfigContaUsuario />;
      case 'notificacoes':
        return <ConfigNotificacoes />;
      case 'seguranca':
        return <ConfigSegurancaBackup />;
      case 'preferencias':
      default:
        return <ConfigPreferenciasFinanceiras />;
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Configurações
      </Typography>

      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        {/* Abas horizontais */}
        <Tabs
          orientation="horizontal"
          variant="scrollable"
          value={abaAtiva}
          onChange={handleChange}
          sx={{
            backgroundColor: '#48673A',
            '& .MuiTab-root': {
              color: '#fff',
              fontWeight: 500,
              minHeight: '48px',
            },
            '& .Mui-selected': {
              backgroundColor: '#77AF51',
              color: '#fff',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#BCCD5D',
            },
          }}
        >
          {abas.map((aba) => (
            <Tab
              key={aba.value}
              value={aba.value}
              icon={aba.icon}
              iconPosition="start"
              label={aba.label}
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
              }}
            />
          ))}
        </Tabs>

        {/* Conteúdo abaixo das abas */}
        <Box sx={{ p: 2 }}>
          {renderConteudo()}
        </Box>
      </Paper>
    </Box>
  );
};

export default ConfiguracoesIndex;
