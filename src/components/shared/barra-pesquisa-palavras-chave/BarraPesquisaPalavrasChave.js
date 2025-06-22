import React from 'react';
import { TextField, InputAdornment, IconButton, useMediaQuery } from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const BarraPesquisaPalavrasChave = ({ valorBusca, onChange, onBuscar, onLimpar }) => {
  const theme = useTheme();
  const isVerySmallScreen = useMediaQuery('(max-width:450px)');

  return (
    <TextField
      className="barra-pesquisa"
      fullWidth
      variant="outlined"
      label={isVerySmallScreen ? 'Buscar' : 'Buscar por palavra-chave'}
      value={valorBusca}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onBuscar();
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '60px',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {valorBusca && (
              <IconButton onClick={onLimpar}>
                <Clear />
              </IconButton>
            )}
            <IconButton onClick={onBuscar}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default BarraPesquisaPalavrasChave;
