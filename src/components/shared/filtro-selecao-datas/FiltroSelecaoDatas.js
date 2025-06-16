import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Collapse, useMediaQuery } from '@mui/material';
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
                <Box className="filtro-container-date">
                    <Box className="filtro-item data-inicial">
                        <TextField
                            label="Data Inicial"
                            type="date"
                            name="dataInicial"
                            value={filtros.dataInicial}
                            onChange={onChange}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Box>

                    <Box className="filtro-item data-final">
                        <TextField
                            label="Data Final"
                            type="date"
                            name="dataFinal"
                            value={filtros.dataFinal}
                            onChange={onChange}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Box>

                    <Box className="botao-pesquisar">
                        <Button
                            variant="contained"
                            onClick={handleBuscar}
                            className="botao-pesquisar-btn"
                            fullWidth={true} // ou false, se preferir largura automática
                        >
                            Pesquisar
                        </Button>
                    </Box>
                </Box>


            </Collapse>
        </div>
    );
};

export default FiltroSelecaoDatas;
