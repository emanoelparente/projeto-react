import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, Grid, InputAdornment
} from '@mui/material';
import dayjs from 'dayjs';

const DividasPagarModalIncluirLancamento = ({ aberto, onFechar, onSalvar }) => {
    const [dados, setDados] = useState({
        nome: '',
        descricao: '',
        valorTotal: '',
        numeroParcelas: 1,
        valorParcela: '',
        dataVencimento: '',
        credor: ''
    });

    // Atualiza valor da parcela quando valorTotal ou numeroParcelas muda
    useEffect(() => {
        const { valorTotal, numeroParcelas } = dados;
        if (valorTotal && numeroParcelas) {
            const novoValorParcela = parseFloat(valorTotal) / parseInt(numeroParcelas);
            setDados(prev => ({
                ...prev,
                valorParcela: isFinite(novoValorParcela) ? novoValorParcela.toFixed(2) : ''
            }));
        }
    }, [dados.valorTotal, dados.numeroParcelas]);

    // Atualiza valor total se a parcela for alterada manualmente
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'valorParcela') {
            const valorParcela = parseFloat(value);
            const parcelas = parseInt(dados.numeroParcelas) || 1;
            const valorTotal = valorParcela * parcelas;

            setDados(prev => ({
                ...prev,
                valorParcela: value,
                valorTotal: isFinite(valorTotal) ? valorTotal.toFixed(2) : ''
            }));
        }

        else if (name === 'numeroParcelas') {
            const parcelas = Math.max(1, Math.min(parseInt(value) || 1, 12)); // entre 1 e 12
            const valorParcela = parseFloat(dados.valorParcela);
            const valorTotal = valorParcela * parcelas;

            setDados(prev => ({
                ...prev,
                numeroParcelas: parcelas,
                valorTotal: isFinite(valorTotal) ? valorTotal.toFixed(2) : ''
            }));
        }

        else if (name === 'valorTotal') {
            const valorTotal = parseFloat(value);
            const parcelas = parseInt(dados.numeroParcelas) || 1;
            const valorParcela = valorTotal / parcelas;

            setDados(prev => ({
                ...prev,
                valorTotal: value,
                valorParcela: isFinite(valorParcela) ? valorParcela.toFixed(2) : ''
            }));
        }

        else {
            setDados(prev => ({ ...prev, [name]: value }));
        }
    };


    const handleSalvar = () => {
        const parcelas = [];

        for (let i = 1; i <= dados.numeroParcelas; i++) {
            parcelas.push({
                id: `${Date.now()}-${i}`, // ID único fictício
                nome: dados.nome,
                descricao: `${dados.descricao} (Parcela ${i}/${dados.numeroParcelas})`,
                valor: parseFloat(dados.valorParcela),
                dataVencimento: dayjs(dados.dataVencimento).add(i - 1, 'month').format('YYYY-MM-DD'),
                credor: dados.credor
            });
        }

        onSalvar(parcelas);
        setDados({
            nome: '',
            descricao: '',
            valorTotal: '',
            numeroParcelas: 1,
            valorParcela: '',
            dataVencimento: '',
            credor: ''
        });
        onFechar();
    };



    return (
        <Dialog open={aberto} onClose={onFechar} maxWidth="sm" fullWidth>
            <DialogTitle>Nova Dívida</DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="Nome" name="nome" fullWidth value={dados.nome} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Descrição" name="descricao" fullWidth value={dados.descricao} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Valor Total"
                            name="valorTotal"
                            fullWidth
                            type="number"
                            value={dados.valorTotal}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="dense"
                            name="numeroParcelas"
                            label="Número de Parcelas"
                            type="number"
                            fullWidth
                            value={dados.numeroParcelas}
                            onChange={handleChange}
                            inputProps={{ min: 1, max: 12 }}
                            error={dados.numeroParcelas > 12}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Valor da Parcela"
                            name="valorParcela"
                            fullWidth
                            type="number"
                            value={dados.valorParcela}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Data de Vencimento da 1ª Parcela"
                            name="dataVencimento"
                            fullWidth
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={dados.dataVencimento}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Credor" name="credor" fullWidth value={dados.credor} onChange={handleChange} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onFechar}>Cancelar</Button>
                <Button onClick={handleSalvar} variant="contained">Salvar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DividasPagarModalIncluirLancamento;
