import React, { useState } from 'react';

// Componentes personalizados
import ExtratoFinanceiroFiltroSelecaoLancamentos from '../components/ExtratoFinanceiroFiltroSelecaoLancamentos';
import ExtratoFinanceiroFiltroSelecaoDatas from '../components/extrato-financeiro-filtro-selecao-datas/ExtratoFinanceiroFiltroSelecaoDatas';
import ExtratoFinanceiroModalEdicaoLancamento from '../components/ExtratoFinanceiroModalEdicaoLancamento';
import NovoLancamentoModal from '../../novo-lancamento/components/NovoLancamentoModal';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';

// Contexto
import { useModal } from '../../../context/ModalContext';

// MUI
import {
    Box, Typography, Divider,
    Collapse, Fab, Dialog, DialogTitle, DialogContent,
    DialogActions, Button, useMediaQuery, useTheme
} from '@mui/material';
import { Add, ExpandLess, ExpandMore, FilterList } from '@mui/icons-material';

import ExtratoFinanceiroTabelaLancamentos from '../components/extrato-financeiro-tabela-lancamentos/ExtratoFinanceiroTabelaLancamentos';

const ExtratoFinanceiroPage = () => {
    const { abrirModal } = useModal();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    

    const [filtros, setFiltros] = useState({ dataInicial: '', dataFinal: '', tipo: '' });

    const [receitas, setReceitas] = useState([
        { id: 1, data: '2025-04-01', categoria: 'Venda', formaRecebimento: 'Pix', descricao: 'Produto X', valor: 500 },
    ]);

    const [despesas, setDespesas] = useState([
        { id: 2, data: '2025-04-02', categoria: 'Compra', formaRecebimento: 'Cartão', descricao: 'Fornecedor Y', valor: 200 },
    ]);

    const [dadosLancamento, setDadosLancamento] = useState(null);
    const [mostrarReceitas, setMostrarReceitas] = useState(true);
    const [mostrarDespesas, setMostrarDespesas] = useState(true);
    const [idParaExcluir, setIdParaExcluir] = useState(null);
    const [filtroDialogAberto, setFiltroDialogAberto] = useState(false);
    const [filtrosAvancados, setFiltrosAvancados] = useState({});

    const editarLancamento = (item) => {
        setDadosLancamento(item);
        abrirModal();
    };

    const confirmarExclusao = (id) => {
        setIdParaExcluir(id);
    };

    const excluirLancamento = () => {
        setReceitas(receitas.filter(r => r.id !== idParaExcluir));
        setDespesas(despesas.filter(d => d.id !== idParaExcluir));
        setIdParaExcluir(null);
    };

    const atualizarLancamento = (dadosAtualizados) => {
        const atualizador = (lista) =>
            lista.map((item) => (item.id === dadosAtualizados.id ? dadosAtualizados : item));

        setReceitas(atualizador(receitas));
        setDespesas(atualizador(despesas));
    };

    const estiloTitulo = (corTexto, corFundo) => ({
        padding: '8px', borderRadius: '4px', color: corTexto,
        backgroundColor: corFundo, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        userSelect: 'none'
    });

    return (
        <Box p={3} maxWidth="85%" mx="auto">
            {/* Filtros principais: barra de pesquisa e seleção de datas */}
            <Box sx={{ p: 2 }}>
                <Box
                    sx={{
                        width: '90%',
                        mx: 'auto',
                        display: 'flex',
                        justifyContent: isMobile ? 'center' : 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        my: 2,
                        backgroundColor: 'rgba(162, 0, 255, 0)', // transparente
                    }}
                >
                    {/* Esquerda: Barra de Pesquisa */}
                    <Box sx={{ flexGrow: 1, maxWidth: 500 }}>
                        <BarraPesquisaPalavrasChave />
                    </Box>

                    {/* Direita: Filtro por Data */}
                    <Box>
                        <FiltroSelecaoDatas
                            filtros={filtros}
                            onChange={(e) =>
                                setFiltros({ ...filtros, [e.target.name]: e.target.value })
                            }
                            onBuscar={() => console.log(filtros)}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Receitas e Despesas */}
            <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                    variant="h6"
                    gutterBottom
                    onClick={() => setMostrarReceitas(!mostrarReceitas)}
                    sx={estiloTitulo('#386641', '#d3f4c7')}
                >
                    RECEITAS {mostrarReceitas ? <ExpandLess /> : <ExpandMore />}
                </Typography>
                <Collapse in={mostrarReceitas}>
                    <ExtratoFinanceiroTabelaLancamentos
                        dados={receitas}
                        corHeader="#386641"
                        tipo="receita"
                        onEditar={editarLancamento}
                        onExcluir={confirmarExclusao}
                    />
                    <Divider sx={{ my: 4 }} />
                </Collapse>

                <Typography
                    variant="h6"
                    gutterBottom
                    onClick={() => setMostrarDespesas(!mostrarDespesas)}
                    sx={estiloTitulo('#9d0208', '#fcb1a6')}
                >
                    DESPESAS {mostrarDespesas ? <ExpandLess /> : <ExpandMore />}
                </Typography>
                <Collapse in={mostrarDespesas}>
                    <ExtratoFinanceiroTabelaLancamentos
                        dados={despesas}
                        corHeader="#9d0208"
                        tipo="despesa"
                        onEditar={editarLancamento}
                        onExcluir={confirmarExclusao}
                    />
                </Collapse>
            </Box>

            {/* Modal de Edição */}
            {dadosLancamento && (
                <ExtratoFinanceiroModalEdicaoLancamento
                    dadosLancamento={dadosLancamento}
                    onSalvar={atualizarLancamento}
                />
            )}

            <NovoLancamentoModal />

            {/* Botões flutuantes */}
            <Fab color="primary" aria-label="add" onClick={abrirModal} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                <Add />
            </Fab>
            <Fab
                color="secondary"
                aria-label="filter"
                onClick={() => setFiltroDialogAberto(true)}
                sx={{ position: 'fixed', bottom: 86, right: 16 }}
            >
                <FilterList />
            </Fab>

            {/* Diálogo de confirmação de exclusão */}
            <Dialog open={!!idParaExcluir} onClose={() => setIdParaExcluir(null)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>Tem certeza que deseja excluir este lançamento?</DialogContent>
                <DialogActions>
                    <Button onClick={() => setIdParaExcluir(null)}>Cancelar</Button>
                    <Button onClick={excluirLancamento} color="error">Excluir</Button>
                </DialogActions>
            </Dialog>

            {/* Filtros avançados */}
            <ExtratoFinanceiroFiltroSelecaoLancamentos
                aberto={filtroDialogAberto}
                onFechar={() => setFiltroDialogAberto(false)}
                onAplicar={(filtros) => setFiltrosAvancados(filtros)}
            />
        </Box>
    );
};

export default ExtratoFinanceiroPage;
