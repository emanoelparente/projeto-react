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
        <Box
            sx={{
                pt: 10,
                px: {
                    xs: 2,   // bem compacto em mobile
                    sm: 4,   // um pouco maior em tablets pequenos
                    md: 8,   // médio em tablets grandes
                    lg: 12,  // quase o padding cheio
                    xl: 15,  // padding cheio em telas grandes (>= 1536px por padrão)
                },
                pb: 0,
            }}
        >
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    color: '#77AF51',
                }}
            >
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
                        backgroundImage: 'linear-gradient(135deg, #77AF51 0%, #BCCD5D 100%)',
                        '& .MuiTab-root': {
                            color: '#fff',
                            fontWeight: 500,
                            minHeight: '48px',
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#0000001a',
                            color: '#fff',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#fff',
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
