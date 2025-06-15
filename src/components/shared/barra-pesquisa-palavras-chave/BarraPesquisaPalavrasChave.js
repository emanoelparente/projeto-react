import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';
import './BarraPesquisaPalavrasChave.css'; // certifique-se de importar os estilos

const BarraPesquisaPalavrasChave = ({ valorBusca, onChange, onLimpar, onBuscar }) => {
    return (
        <div className="filtro-container filtro-item">
            <TextField
                fullWidth
                variant="outlined"
                label="Buscar por palavra-chave"
                value={valorBusca}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') onBuscar();
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
                    )
                }}
            />
        </div>
    );
};

export default BarraPesquisaPalavrasChave;
