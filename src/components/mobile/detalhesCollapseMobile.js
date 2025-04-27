// DetalhesCollapseMobile.js
import React from 'react';
import { Collapse, Box, Typography, IconButton, Tooltip, TableRow, TableCell } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const DetalhesCollapseMobile = ({ aberto, dados, renderExtraInfo, onEditar, onExcluir }) => {
  if (!aberto) return null;

  return (
    <TableRow>
      <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
        <Collapse in={aberto} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            {renderExtraInfo(dados)}
            <Box mt={1}>
              {onEditar && (
                <Tooltip title="Editar">
                  <IconButton color="primary" onClick={() => onEditar(dados)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
              )}
              {onExcluir && (
                <Tooltip title="Excluir">
                  <IconButton color="error" onClick={() => onExcluir(dados.id)}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

export default DetalhesCollapseMobile;
