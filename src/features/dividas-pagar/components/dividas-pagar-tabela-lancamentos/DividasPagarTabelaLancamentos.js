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
    'Pendente': 'error',
    'Pago': 'success'
};

const DetalhesCollapseMobile = ({ item, expanded, onToggle, onEditar, onExcluir, onQuitar }) => {
    const isMobile = useMediaQuery('(max-width:700px)');

    return (
        <>
            <TableRow onClick={onToggle} style={{ cursor: 'pointer' }}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                <TableCell align="center">{expanded ? <ExpandLess /> : <ExpandMore />}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={3} style={{ padding: 0 }}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box sx={{ padding: 2 }}>
                            <Typography variant="body2"><strong>Descrição:</strong> {item.descricao}</Typography>
                            <Typography variant="body2"><strong>Quando vence:</strong> {item.dataVencimento}</Typography>
                            <Typography variant="body2"><strong>A quem devo:</strong> {item.destinatario}</Typography>
                            <Typography variant="body2">
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
    const isMobile = useMediaQuery('(max-width:700px)');
    const [expandedId, setExpandedId] = React.useState(null);
    const [dadosInternos, setDadosInternos] = React.useState([]);

    React.useEffect(() => {
        if (!dados) {
            const dadosMock = [
                {
                    id: 1,
                    nome: 'Aluguel',
                    descricao: 'Apartamento mensal',
                    valor: 1500,
                    dataVencimento: '2024-06-10',
                    destinatario: 'Imobiliária Silvaa',
                    situacao: 'A vencer',
                },
                {
                    id: 2,
                    nome: 'Cartão de Crédito',
                    descricao: 'Fatura cartão',
                    valor: 800,
                    dataVencimento: '2025-07-05',
                    destinatario: 'Nubank',
                    situacao: 'Pendente',
                },
                {
                    id: 3,
                    nome: 'Financiamento',
                    descricao: 'Carro financiado',
                    valor: 950,
                    dataVencimento: '2025-05-30',
                    destinatario: 'Banco ABC',
                    situacao: 'Pago',
                },

            ];
            setDadosInternos(dadosMock);
        }
    }, [dados]);

    const toggleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const estiloHeader = {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    };

    const lista = dados || dadosInternos;

    return (
        <TableContainer component={Paper} sx={{ width: '80%', mx: 'auto' }}>

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
                                <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                                <TableCell>{item.dataVencimento}</TableCell>
                                <TableCell>{item.destinatario}</TableCell>
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
                                        <IconButton color="error" onClick={() => onExcluir(item.id)}><LixeiraIcon width={22} height={22} />
                                        </IconButton>
                                    </Tooltip>
                                    {item.situacao === 'Pago' ? (
                                        <Tooltip title="Quitado">
                                            <IconButton disabled>
                                                <QuitadoIcon width={22} height={22} />
                                            </IconButton>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title="Quitar">
                                            <IconButton color="success" onClick={() => onQuitar(item)}>
                                                <QuitarIcon width={22} height={22} />
                                            </IconButton>
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
