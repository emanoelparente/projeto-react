import React, { useState } from 'react';

// Componentes personalizados
import SaldoAtual from '../components/saldoConta';
import FiltroSelecaoDatas from '../components/filtroSelecaoDatas';
import ModalEdicaoLancamento from '../components/Forms/modalEdicaoLancamento';
import NovoLancamento from '../components/Forms/novoLancamento';

// Contexto
import { useModal } from '../context/modalContext'; // ajuste o caminho se necessário

// MUI - Ícones
import { Add, Edit, Delete, ExpandLess, ExpandMore } from '@mui/icons-material';

// MUI - Componentes
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Fab,
    Divider,
    Collapse
} from '@mui/material';





const ExtratoFinanceiro = () => {
    const { abrirModal } = useModal(); // <-- pega do contexto
    const [filtros, setFiltros] = useState({
        dataInicial: '',
        dataFinal: '',
        tipo: '',
    });

    const [receitas, setReceitas] = useState([
        {
            id: 1,
            data: '2025-04-01',
            categoria: 'Venda',
            formaRecebimento: 'Pix',
            descricao: 'Produto X',
            valor: 500,
        },
        {
            id: 1,
            data: '2025-04-01',
            categoria: 'Venda',
            formaRecebimento: 'Pix',
            descricao: 'Produto X',
            valor: 500,
        },
        {
            id: 1,
            data: '2025-04-01',
            categoria: 'Venda',
            formaRecebimento: 'Pix',
            descricao: 'Produto X',
            valor: 500,
        },

        // Adicione mais receitas mockadas conforme necessário
    ]);

    const [dadosLancamento, setDadosLancamento] = useState(null);  // Estado para armazenar os dados do lançamento a ser editado

    const handleFiltroChange = (e) => {
        setFiltros({ ...filtros, [e.target.name]: e.target.value });
    };

    const aplicarFiltro = () => {
        console.log('Aplicando filtro:', filtros);
        // Aqui você pode filtrar os dados de receitas
    };

    const editarReceita = (id) => {
        const lancamento = receitas.find((r) => r.id === id);
        setDadosLancamento(lancamento);  // Seta os dados da receita que será editada
        abrirModal(); // <-- abre o modal!
    };


    const apagarReceita = (id) => {
        setReceitas(receitas.filter((r) => r.id !== id));
    };

    const atualizarLancamento = (dadosAtualizados) => {
        // Atualize a receita com os dados modificados no estado
        setReceitas(receitas.map((r) => (r.id === dadosAtualizados.id ? dadosAtualizados : r)));
    };

    const estiloCabecalhoTabela = (corTexto = '#000', caseTexto = 'uppercase') => ({
        fontWeight: 'bold',
        color: corTexto,
        textTransform: caseTexto, // 'uppercase', 'lowercase', 'capitalize'
    });

    const [mostrarReceitas, setMostrarReceitas] = useState(true);
    const [mostrarDespesas, setMostrarDespesas] = useState(true);



    return (
        <Box p={3} maxWidth="85%" mx="auto">
            <SaldoAtual />

            <FiltroSelecaoDatas
                filtros={filtros}
                onChange={handleFiltroChange}
                onBuscar={aplicarFiltro}
            />

            <Box mt={4}>


                <Typography
                    variant="h6"
                    gutterBottom
                    onClick={() => setMostrarReceitas(!mostrarReceitas)}
                    sx={{
                        padding: '8px',
                        borderRadius: '4px',
                        color: '#386641',
                        backgroundColor: '#d3f4c7',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        userSelect: 'none'
                    }}
                >
                    RECEITAS {mostrarReceitas ? <ExpandLess /> : <ExpandMore />}
                </Typography>

                <Collapse in={mostrarReceitas}>
                    <TableContainer component={Paper}>


                        <Table>
                            <TableHead>
                                <TableRow sx={{
                                    backgroundColor: '#e9ecef',
                                    '& th': estiloCabecalhoTabela('#495057', 'uppercase'),
                                }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Data</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Categoria</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Forma de Recebimento</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Valor</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Ações</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {receitas.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.data}</TableCell>
                                        <TableCell>{item.categoria}</TableCell>
                                        <TableCell>{item.formaRecebimento}</TableCell>
                                        <TableCell>{item.descricao}</TableCell>
                                        <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => editarReceita(item.id)} color="primary"><Edit /></IconButton>
                                            <IconButton onClick={() => apagarReceita(item.id)} color="error"><Delete /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {receitas.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">Nenhuma receita encontrada.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Divider sx={{ my: 4 }} />
                </Collapse>

                <Typography
                    variant="h6"
                    gutterBottom
                    onClick={() => setMostrarDespesas(!mostrarDespesas)}
                    sx={{
                        padding: '8px',
                        borderRadius: '4px',
                        color: "#9d0208",
                        backgroundColor: '#fcb1a6',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        userSelect: 'none'
                    }}
                >
                    DESPESAS {mostrarDespesas ? <ExpandLess /> : <ExpandMore />}
                </Typography>

                <Collapse in={mostrarDespesas}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{
                                    backgroundColor: '#e9ecef',
                                    '& th': estiloCabecalhoTabela('#495057', 'uppercase'),
                                }}>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Categoria</TableCell>
                                    <TableCell>Forma de Recebimento</TableCell>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {receitas.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.data}</TableCell>
                                        <TableCell>{item.categoria}</TableCell>
                                        <TableCell>{item.formaRecebimento}</TableCell>
                                        <TableCell>{item.descricao}</TableCell>
                                        <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => editarReceita(item.id)} color="primary"><Edit /></IconButton>
                                            <IconButton onClick={() => apagarReceita(item.id)} color="error"><Delete /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {receitas.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">Nenhuma receita encontrada.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Collapse>

            </Box>

            {dadosLancamento && (
                <ModalEdicaoLancamento dadosLancamento={dadosLancamento} onSalvar={atualizarLancamento} />
            )}

            <NovoLancamento /> {/* Modal de novo lançamento sempre montado, controlado via context */}

            <Fab
                color="primary"
                aria-label="add"
                onClick={abrirModal}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
            >
                <Add />
            </Fab>

        </Box>

    );
};

export default ExtratoFinanceiro;
