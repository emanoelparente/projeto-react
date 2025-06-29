import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, IconButton, Tooltip, Box, Collapse, Typography, Chip
} from '@mui/material';
import {
  Edit, Delete, CreditScore, ExpandMore, ExpandLess
} from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import './DividasPagarTabelaLancamentos.css';
import { ReactComponent as LixeiraIcon } from '../../../../assets/icons/lixeira-1.svg';
import { ReactComponent as QuitarIcon } from '../../../../assets/icons/quitar-1.svg';
import { ReactComponent as EditarIcon } from '../../../../assets/icons/editar-1.svg';
import { ReactComponent as QuitadoIcon } from '../../../../assets/icons/quitado-1.svg';

const statusColors = {
  'A vencer': 'warning',
  'Vencido': 'error',
  'Pago': 'success'
};

const DetalhesCollapseMobile = ({ item, expanded, onToggle, onEditar, onExcluir, onQuitar }) => {
  const isMobile = useMediaQuery('(max-width:930px)');

  return (
    <>
      <TableRow onClick={onToggle} style={{ cursor: 'pointer' }}>
        <TableCell>{item.nome}</TableCell>
        <TableCell>R$ {parseFloat(item.valorTotal || 0).toFixed(2)}</TableCell>
        <TableCell align="center">{expanded ? <ExpandLess /> : <ExpandMore />}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} style={{ padding: 0 }}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 2 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.4, mb: 1 }}>
                <strong>Descrição:</strong> {item.descricao}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4, mb: 1 }}>
                <strong>Quando vence:</strong> {item.vencimento}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4, mb: 1 }}>
                <strong>A quem devo:</strong> {item.credor}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4, mb: 1 }}>
                <strong>Situação:</strong>
                <Chip
                  label={item.situacao}
                  color={statusColors[item.situacao]}
                  size="small"
                  sx={{ ml: 1, width: 80, justifyContent: 'center', fontSize: '0.75rem' }}
                />
              </Typography>

              <Box display="flex" justifyContent="center" gap={1} mt={1}>
                <Tooltip title="Editar">
                  <IconButton color="primary" onClick={() => onEditar(item)}><Edit /></IconButton>
                </Tooltip>
                <Tooltip title="Excluir">
                  <IconButton color="error" onClick={() => onExcluir(item.id)}><Delete /></IconButton>
                </Tooltip>
                <Tooltip title="Quitar">
                  <IconButton color="success" onClick={() => onQuitar(item)}><CreditScore /></IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const DividasPagarTabelaLancamentos = ({ dados, onEditar, onExcluir, onQuitar }) => {
  const isMobile = useMediaQuery('(max-width:930px)');
  const [expandedId, setExpandedId] = React.useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const estiloHeader = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const lista = dados || [];

  return (
    <TableContainer component={Paper} sx={{ width: '90%', mx: 'auto' }}>
      <Table>
        {!isMobile && (
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f1f1f1' }}>
              <TableCell sx={estiloHeader}>Nome</TableCell>
              <TableCell sx={estiloHeader}>Descrição</TableCell>
              <TableCell sx={estiloHeader}>Valor</TableCell>
              <TableCell sx={estiloHeader}>Quando Vence</TableCell>
              <TableCell sx={estiloHeader}>A quem devo</TableCell>
              <TableCell sx={estiloHeader}>Situação</TableCell>
              <TableCell sx={estiloHeader} align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {lista.length > 0 ? lista.map(item => (
            isMobile ? (
              <DetalhesCollapseMobile
                key={item.id}
                item={item}
                expanded={expandedId === item.id}
                onToggle={() => toggleExpand(item.id)}
                onEditar={onEditar}
                onExcluir={onExcluir}
                onQuitar={onQuitar}
              />
            ) : (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.descricao}</TableCell>
                <TableCell>R$ {parseFloat(item.valorTotal || 0).toFixed(2)}</TableCell>
                <TableCell>{item.vencimento}</TableCell>
                <TableCell>{item.credor}</TableCell>
                <TableCell>
                  <Chip
                    label={item.situacao}
                    color={statusColors[item.situacao]}
                    size="small"
                    sx={{ width: 80, justifyContent: 'center', fontSize: '0.75rem' }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Editar">
                    <IconButton color="primary" onClick={() => onEditar(item)}><EditarIcon width={22} height={22} /></IconButton>
                  </Tooltip>
                  <Tooltip title="Excluir">
                    <IconButton color="error" onClick={() => onExcluir(item.id)}><LixeiraIcon width={22} height={22} /></IconButton>
                  </Tooltip>
                  {item.situacao === 'Pago' ? (
                    <Tooltip title="Quitado">
                      <IconButton disabled><QuitadoIcon width={22} height={22} /></IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Quitar">
                      <IconButton color="success" onClick={() => onQuitar(item)}><QuitarIcon width={22} height={22} /></IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            )
          )) : (
            <TableRow>
              <TableCell colSpan={isMobile ? 3 : 7} align="center">
                Nenhuma dívida encontrada.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DividasPagarTabelaLancamentos;
