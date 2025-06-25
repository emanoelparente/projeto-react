import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid, Tooltip } from '@mui/material';

const DividasPagarModalIncluirLancamento = ({ aberto, onFechar, onSalvar }) => {
    const [dados, setDados] = useState({
        nome: '',
        descricao: '',
        valorTotal: '',
        numeroParcelas: 1,
        valorParcela: '',
        vencimento: '',
        credor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'valorParcela') {
            const parcelas = parseInt(dados.numeroParcelas) || 1;
            const novoTotal = parseFloat(value) * parcelas;
            setDados(prev => ({
                ...prev,
                valorParcela: value,
                valorTotal: isFinite(novoTotal) ? novoTotal.toFixed(2) : ''
            }));
        } else if (name === 'numeroParcelas') {
            const parcelas = Math.max(1, Math.min(parseInt(value) || 1, 12));
            const total = parseFloat(dados.valorTotal);
            const parcela = total / parcelas;
            setDados(prev => ({
                ...prev,
                numeroParcelas: parcelas,
                valorParcela: isFinite(parcela) ? parcela.toFixed(2) : ''
            }));
        } else if (name === 'valorTotal') {
            const total = parseFloat(value);
            const parcelas = parseInt(dados.numeroParcelas) || 1;
            const parcela = total / parcelas;
            setDados(prev => ({
                ...prev,
                valorTotal: value,
                valorParcela: isFinite(parcela) ? parcela.toFixed(2) : ''
            }));
        } else {
            setDados(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSalvar = () => {
        onSalvar(dados);
        onFechar();
    };

    return (
        <Dialog 
            open={aberto} 
            onClose={onFechar} 
            fullWidth 
            maxWidth="md" 
            PaperProps={{ sx: { overflowX: 'hidden' } }}
        >
            <DialogTitle sx={{ fontWeight: 'bold', px: 2 }}>
                ADICIONAR NOVA DÍVIDA
            </DialogTitle>
            <DialogContent sx={{ px: 2 }}>
                <Grid container spacing={1}>
                    {/* Coluna da Esquerda */}
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <TextField
                                    name="nome"
                                    label="NOME"
                                    placeholder="Ex.: Tefone"
                                    fullWidth
                                    value={dados.nome}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="valorTotal"
                                    label="VALOR"
                                    placeholder="Valor total da dívida"
                                    type="number"
                                    fullWidth
                                    value={dados.valorTotal}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="vencimento"
                                    label="VENCIMENTO"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={dados.vencimento}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Coluna da Direita */}
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <TextField
                                    name="descricao"
                                    label="DESCRIÇÃO"
                                    placeholder="Ex.: Telefone novo comprado no shopping"
                                    fullWidth
                                    value={dados.descricao}
                                    onChange={handleChange}
                                />
                            </Grid>

                            {/* Parcelas + Valor Parcela lado a lado */}
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Tooltip title="Máximo 12 parcelas">
                                            <TextField
                                                name="numeroParcelas"
                                                label="PARCELAS"
                                                type="number"
                                                placeholder="12"
                                                inputProps={{
                                                    min: 1,
                                                    max: 12,
                                                    style: { textAlign: 'center' }
                                                }}
                                                fullWidth
                                                value={dados.numeroParcelas}
                                                onChange={handleChange}
                                            />
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            name="valorParcela"
                                            label="VALOR DA PARCELA"
                                            placeholder="Ex: R$ 20,52"
                                            type="number"
                                            fullWidth
                                            value={dados.valorParcela}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <TextField
                                    name="credor"
                                    label="CREDOR"
                                    placeholder="A quem eu devo"
                                    fullWidth
                                    value={dados.credor}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                                <Button onClick={onFechar} variant="outlined" sx={{ fontWeight: 'bold' }}>
                                    CANCELAR
                                </Button>
                                <Button onClick={handleSalvar} variant="contained" sx={{ fontWeight: 'bold' }}>
                                    SALVAR
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default DividasPagarModalIncluirLancamento;
