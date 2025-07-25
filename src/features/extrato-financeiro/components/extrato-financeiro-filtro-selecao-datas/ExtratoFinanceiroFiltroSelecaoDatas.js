/*import React, { useState } from 'react';
import { Grid, TextField, Button, Collapse, useMediaQuery } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExtratoFinanceiroSaldoAtual from '../extrato-financeiro-saldo-atual/ExtratoFinanceiroSaldoAtual';
import './ExtratoFinanceiroFiltroSelecaoDatas.css';


const ExtratoFinanceiroFiltroSelecaoDatas = ({ filtros, onChange, onBuscar }) => {
    const [open, setOpen] = useState(true);
    const isMobile = useMediaQuery('(max-width:900px)');

    const handleBuscar = () => {
        onBuscar();
        if (isMobile) setOpen(false); // recolhe em telas pequenas
    };

    return (
        <div className="filtro-wrapper">
            {isMobile && (
                <Button
                    onClick={() => setOpen(!open)}
                    variant="text"
                    fullWidth
                    sx={{
                        mb: 1,
                        p: 1,
                        minHeight: 48,
                        '&:hover': { backgroundColor: 'transparent' } 
                    }}
                >
                    {open ? 'Esconder filtros' : <FilterAltIcon sx={{ color: '#77AF51', fontSize: '2rem' }} />}
                </Button>
            )}

            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid
                    container
                    spacing={2}
                    mb={4}
                    justifyContent="center"
                    alignItems="flex-end"
                    className="filtro-container-d"
                >
                

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

export default ExtratoFinanceiroFiltroSelecaoDatas;*/
