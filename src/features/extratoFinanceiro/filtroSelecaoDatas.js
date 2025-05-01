import React, { useState } from 'react';
import { Grid, TextField, Button, Collapse, useMediaQuery } from '@mui/material';
import SaldoAtualMini from './SaldoAtualMini';
import '../../styles/filtroSelecaoDatas.css';


const FiltroSelecaoDatas = ({ filtros, onChange, onBuscar }) => {
    const [open, setOpen] = useState(true);
    const isMobile = useMediaQuery('(max-width:900px)');

    const handleBuscar = () => {
        onBuscar();
        if (isMobile) setOpen(false); // recolhe em telas pequenas
    };

    return (
        <div className="filtro-wrapper">
            {isMobile && (
                <Button onClick={() => setOpen(!open)} variant="outlined" fullWidth sx={{ mb: 1 }}>
                    {open ? 'Esconder filtros' : 'Filtrar por data'}
                </Button>
            )}

            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid
                    container
                    spacing={2}
                    mb={4}
                    justifyContent="center"
                    alignItems="flex-end"
                    className="filtro-container"
                >
                    <Grid item xs={12} sm={3} className="filtro-item saldo-topo">
                        <SaldoAtualMini />
                    </Grid>

                    <Grid item xs={12} sm={3} className="filtro-item data-inicial">
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

                    <Grid item xs={12} sm={3} className="filtro-item data-final">
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

                    <Grid item xs={12} sm={3} className="filtro-item botao-pesquisar">
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleBuscar}
                            sx={{ minHeight: '56px' }}
                        >
                            Pesquisar
                        </Button>
                    </Grid>
                </Grid>
            </Collapse>
        </div>
    );
};

export default FiltroSelecaoDatas;
