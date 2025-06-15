import React, { useState } from 'react';
import { Grid, TextField, Button, Collapse, useMediaQuery } from '@mui/material';
import './FiltroSelecaoDatas.css';

const FiltroSelecaoDatas = ({ filtros = {}, onChange, onBuscar }) => {
    const {
        dataInicial = "",
        dataFinal = ""
    } = filtros;

    const [open, setOpen] = useState(true);
    const isMobile = useMediaQuery('(max-width:900px)');

    const handleBuscar = () => {
        onBuscar();
        if (isMobile) setOpen(false);
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
                    spacing={{ xs: 2, md: 10 }} // md: 900px para cima
                    justifyContent="flex-end"
                    alignItems="center"
                    className="filtro-container"
                >

                    <Grid item xs={12} sm={6} md={4} className="filtro-item data-inicial">
                        <TextField

                            label="Data Inicial"
                            type="date"
                            name="dataInicial"
                            value={filtros.dataInicial}
                            onChange={onChange}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} className="filtro-item data-final">
                        <TextField

                            label="Data Final"
                            type="date"
                            name="dataFinal"
                            value={filtros.dataFinal}
                            onChange={onChange}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4} className="botao-pesquisar">
                        <Button
                            variant="contained"
                            onClick={handleBuscar}
                            className="botao-pesquisar-btn"
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
