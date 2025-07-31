import React, { useState } from 'react';
import { Grid, Box, TextField, Button, Collapse, useMediaQuery } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import './FiltroSelecaoDatas.css';

const FiltroSelecaoDatas = ({
  filtros = {},
  onChange,
  onBuscar,
  filtroExpandido,
  setFiltroExpandido
}) => {
  const {
    dataInicial = "",
    dataFinal = ""
  } = filtros;

  const isMobile = useMediaQuery('(max-width:900px)');

  const handleBuscar = () => {
    onBuscar();
    if (isMobile) setFiltroExpandido(false);
  };

  return (
    <div className="filtro-wrapper">
      {isMobile && (
        <Button
          onClick={() => setFiltroExpandido(!filtroExpandido)}
          variant="text"
          fullWidth
          sx={{ mb: 1, p: 1 }}
        >
          {filtroExpandido ? 'Esconder filtros' : <FilterAltIcon sx={{ color: '#77AF51', fontSize: '2rem' }} />}
        </Button>
      )}

      <Collapse in={filtroExpandido} timeout="auto" unmountOnExit>
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
              fullWidth
              sx={{
                backgroundImage: 'linear-gradient(#77AF51)',
                '& td': {
                  color: '#ffffff',
                  fontWeight: 'bold',
                },
              }}>
              Pesquisar
            </Button>
          </Box>
        </Box>
      </Collapse>
    </div>
  );
};


export default FiltroSelecaoDatas;
