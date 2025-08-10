// src/features/settings/components/ConfigPreferenciasFinanceiras.js
import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Switch,
    FormControlLabel,
    Divider
} from '@mui/material';

export default function ConfigPreferenciasFinanceiras() {
    const [moeda, setMoeda] = React.useState('BRL');
    const [formatoData, setFormatoData] = React.useState('DD/MM/YYYY');
    const [idioma, setIdioma] = React.useState('pt-BR');

    return (
        <Box sx={{ p: 2 }}>
            {/* Título */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#77AF51', mb: 2 }}>
                Preferências Financeiras
            </Typography>

            {/* Seção: Exibição */}
            <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                📊 Exibição
            </Typography>
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                <InputLabel shrink>Moeda Padrão</InputLabel>
                <Select value={moeda} onChange={(e) => setMoeda(e.target.value)} label="Moeda Padrão">
                    <MenuItem value="BRL">Real (R$)</MenuItem>
                    <MenuItem value="USD">Dólar (US$)</MenuItem>
                    <MenuItem value="EUR">Euro (€)</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                <InputLabel shrink>Idioma</InputLabel>
                <Select value={idioma} onChange={(e) => setIdioma(e.target.value)} label="Idioma">
                    <MenuItem value="pt-BR">Português</MenuItem>
                    <MenuItem value="en-US">Inglês</MenuItem>
                    <MenuItem value="es-ES">Espanhol</MenuItem>
                </Select>
            </FormControl>

            {/* Seção: Financeiras */}
            <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                💰 Preferências
            </Typography>
            <FormControlLabel control={<Switch defaultChecked />} label="Mostrar saldo acumulado no dashboard" />
            <FormControlLabel control={<Switch />} label="Ativar metas financeiras" />

            
        </Box>

    );
}
