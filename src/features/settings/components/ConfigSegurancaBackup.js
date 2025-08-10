// src/features/settings/components/ConfigSegurancaBackup.js
import React, { useState } from 'react';
import {
    Typography,
    Box,
    Switch,
    FormControlLabel,
    Button,
    Select,
    MenuItem,
    Divider,
    FormControl,
    InputLabel,
    TextField
} from '@mui/material';

export default function ConfigSegurancaBackup() {
    const [twoFactor, setTwoFactor] = useState(false);
    const [autoLockTime, setAutoLockTime] = useState(5);
    const [autoBackup, setAutoBackup] = useState(false);
    const [backupInterval, setBackupInterval] = useState('semanal');

    return (
        <Box>
            {/* Segurança da Conta */}
            <Typography variant="h6" gutterBottom>Segurança da Conta</Typography>
            <FormControlLabel
                control={
                    <Switch
                        checked={twoFactor}
                        onChange={(e) => setTwoFactor(e.target.checked)}
                        color="primary"
                    />
                }
                label="Ativar autenticação em dois fatores (2FA)"
            />
            <Box mt={2}>
                <Button variant="outlined" color="secondary" sx={{ ml: 2 }}>
                    Encerrar Todas as Sessões
                </Button>
            </Box>

            {/* Segurança */}
            <Box mt={3} mb={3}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Segurança de Acesso
                </Typography>
                <TextField
                    fullWidth
                    label="Senha Atual"
                    type="password"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Nova Senha"
                    type="password"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Confirmar Nova Senha"
                    type="password"
                    margin="normal"
                />

                <Button
                    variant="outlined"
                    sx={{ mt: 2, borderColor: '#77AF51', color: '#77AF51' }}
                >
                    Ativar Autenticação em Dois Fatores
                </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Proteção de Dados */}
            <Typography variant="h6" gutterBottom>Proteção de Dados</Typography>
            <FormControl fullWidth margin="normal">
                <InputLabel id="auto-lock-label">
                    Bloqueio automático após (minutos)
                </InputLabel>
                <Select
                    labelId="auto-lock-label"
                    value={autoLockTime}
                    onChange={(e) => setAutoLockTime(e.target.value)}
                    label="Bloqueio automático após (minutos)" // <- necessário
                >
                    <MenuItem value={5}>5 minutos</MenuItem>
                    <MenuItem value={10}>10 minutos</MenuItem>
                    <MenuItem value={15}>15 minutos</MenuItem>
                    <MenuItem value={30}>30 minutos</MenuItem>
                </Select>
            </FormControl>


            <Divider sx={{ my: 3 }} />

            {/* Backup e Restauração */}
            <Typography variant="h6" gutterBottom>Backup e Restauração</Typography>
            <FormControlLabel
                control={
                    <Switch
                        checked={autoBackup}
                        onChange={(e) => setAutoBackup(e.target.checked)}
                        color="primary"
                    />
                }
                label="Ativar backups automáticos"
            />
            {autoBackup && (
                <FormControl fullWidth margin="normal">
                    <InputLabel>Frequência do backup</InputLabel>
                    <Select
                        value={backupInterval}
                        onChange={(e) => setBackupInterval(e.target.value)}
                    >
                        <MenuItem value="diario">Diário</MenuItem>
                        <MenuItem value="semanal">Semanal</MenuItem>
                        <MenuItem value="mensal">Mensal</MenuItem>
                    </Select>
                </FormControl>
            )}
            <Box mt={2}>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Fazer Backup Agora
                </Button>
                <Button variant="outlined" color="secondary">
                    Restaurar Backup
                </Button>
            </Box>
        </Box>
    );
}
