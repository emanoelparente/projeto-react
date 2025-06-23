// dentro de components/NovoDividaModal.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const DividasPagarModalIncluirLancamento = ({ aberto, onFechar, onSalvar }) => {
    const [dados, setDados] = useState({ descricao: '', valor: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados(prev => ({ ...prev, [name]: value }));
    };

    const handleSalvar = () => {
        onSalvar(dados);
        setDados({ descricao: '', valor: '' });
        onFechar();
    };

    return (
        <Dialog open={aberto} onClose={onFechar}>
            <DialogTitle>Nova Dívida</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    name="descricao"
                    label="Descrição"
                    fullWidth
                    value={dados.descricao}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="valor"
                    label="Valor"
                    fullWidth
                    type="number"
                    value={dados.valor}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onFechar}>Cancelar</Button>
                <Button onClick={handleSalvar} variant="contained">Salvar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DividasPagarModalIncluirLancamento;
