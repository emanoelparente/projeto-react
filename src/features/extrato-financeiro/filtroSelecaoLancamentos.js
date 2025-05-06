
import React, { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, FormControl, InputLabel, Select, MenuItem, Box
} from '@mui/material';
import FiltroSelecaoDatas from '../../components/shared/filtroSelecaoDatas';

const ExtratoFinanceiroFiltroSelecaoLancamentos = ({ aberto, onFechar, onAplicar }) => {
    const [forma, setForma] = useState('');
    const [categoria, setCategoria] = useState('');
    const [palavraChave, setPalavraChave] = useState('');

    const aplicarFiltros = () => {
        onAplicar({ forma, categoria, palavraChave });
        onFechar();
    };

    return (
        <Dialog open={aberto} onClose={onFechar}>
            <DialogTitle>Filtrar Lançamentos</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>

                    <TextField
                        label="Palavra-chave"
                        variant="outlined"
                        value={palavraChave}
                        onChange={(e) => setPalavraChave(e.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Forma</InputLabel>
                        <Select
                            value={forma}
                            onChange={(e) => setForma(e.target.value)}
                            label="Forma"
                        >
                            <MenuItem value="">Todas</MenuItem>
                            <MenuItem value="Pix">Pix</MenuItem>
                            <MenuItem value="Cartão">Cartão</MenuItem>
                            <MenuItem value="Dinheiro">Dinheiro</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Categoria</InputLabel>
                        <Select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            label="Categoria"
                        >
                            <MenuItem value="">Todas</MenuItem>
                            <MenuItem value="Venda">Venda</MenuItem>
                            <MenuItem value="Compra">Compra</MenuItem>
                            <MenuItem value="Serviço">Serviço</MenuItem>
                        </Select>
                    </FormControl>

                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onFechar}>Cancelar</Button>
                <Button onClick={aplicarFiltros} variant="contained">Aplicar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExtratoFinanceiroFiltroSelecaoLancamentos;
