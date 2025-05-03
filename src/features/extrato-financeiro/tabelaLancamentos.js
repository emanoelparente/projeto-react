import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, Tooltip, Box, Collapse, Typography
} from '@mui/material';
import { Edit, Delete, ExpandMore, ExpandLess } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../../styles/tabelaLancamentos.css';

;

const DetalhesCollapseMobile = ({ item, tipo, onEditar, onExcluir, expanded, onToggle }) => {
    return (
        <Box>
            <TableRow onClick={onToggle} style={{ cursor: 'pointer' }}>
                <TableCell>{item.data}</TableCell>
                <TableCell>{item.categoria}</TableCell>
                <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                <TableCell align="center">{expanded ? <ExpandLess /> : <ExpandMore />}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={4} style={{ padding: 0 }}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box sx={{ padding: 2 }}>
                            <Typography variant="body2" gutterBottom>
                                <strong>{tipo === 'receita' ? 'Forma de Recebimento:' : 'Forma de Pagamento:'}</strong> {item.formaRecebimento}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Descrição:</strong> {item.descricao}
                            </Typography>
                            <Box display="flex" justifyContent="center" gap={1}>
                                <Tooltip title="Editar">
                                    <IconButton color="primary" onClick={() => onEditar(item)}>
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Excluir">
                                    <IconButton color="error" onClick={() => onExcluir(item.id)}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Box>
    );
};

const TabelaLancamentos = ({ dados, corHeader = '#000', tipo = '', onEditar, onExcluir }) => {
    const estiloHeader = {
        fontWeight: 'bold',
        color: corHeader,
        textTransform: 'uppercase',
    };

    const isMobile = useMediaQuery('(max-width:700px)');
    const [expandedId, setExpandedId] = React.useState(null);

    const toggleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                {!isMobile && (
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#f1f1f1' }}>
                            <TableCell sx={estiloHeader}>Data</TableCell>
                            <TableCell sx={estiloHeader}>Categoria</TableCell>
                            <TableCell sx={estiloHeader} className="col-forma">
                                {tipo === 'receita' ? 'Forma de Recebimento' : 'Forma de Pagamento'}
                            </TableCell>
                            <TableCell sx={estiloHeader} className="col-descricao">Descrição</TableCell>
                            <TableCell sx={estiloHeader}>Valor</TableCell>
                            <TableCell sx={estiloHeader} align="center" className="col-acoes">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                )}

                <TableBody>
                    {dados.length > 0 ? (
                        dados.map((item) => (
                            isMobile ? (
                                <DetalhesCollapseMobile
                                    key={item.id}
                                    item={item}
                                    tipo={tipo}
                                    onEditar={onEditar}
                                    onExcluir={onExcluir}
                                    expanded={expandedId === item.id}
                                    onToggle={() => toggleExpand(item.id)}
                                />
                            ) : (
                                <TableRow key={item.id}>
                                    <TableCell>{item.data}</TableCell>
                                    <TableCell>{item.categoria}</TableCell>
                                    <TableCell className="col-forma">{item.formaRecebimento}</TableCell>
                                    <TableCell className="col-descricao">{item.descricao}</TableCell>
                                    <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                                    <TableCell align="center" className="col-acoes">
                                        <Tooltip title="Editar">
                                            <IconButton color="primary" onClick={() => onEditar(item)}>
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Excluir">
                                            <IconButton color="error" onClick={() => onExcluir(item.id)}>
                                                <Delete />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={isMobile ? 4 : 6} align="center">Nenhum lançamento encontrado.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TabelaLancamentos;
