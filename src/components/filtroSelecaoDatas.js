import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

const FiltroSelecaoDatas = ({ filtros, onChange, onBuscar }) => {
    return (
        <Grid
            container
            spacing={2}
            mb={4}
            justifyContent="center"
            sx={{ marginTop: '5%' }}
        >
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    label="Data Inicial"
                    type="date"
                    name="dataInicial"
                    value={filtros.dataInicial}
                    onChange={onChange}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    label="Data Final"
                    type="date"
                    name="dataFinal"
                    value={filtros.dataFinal}
                    onChange={onChange}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    label="Filtrar por"
                    name="tipo"
                    value={filtros.tipo}
                    onChange={onChange}
                    placeholder="Categoria, descrição, etc."
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={onBuscar}
                    sx={{ height: '100%' }}
                >
                    Buscar
                </Button>
            </Grid>
        </Grid>
    );
};

export default FiltroSelecaoDatas;
