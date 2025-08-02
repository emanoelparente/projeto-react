import React, { useState, useEffect } from 'react';

// Componentes personalizados
import ExtratoFinanceiroFiltroSelecaoLancamentos from '../components/ExtratoFinanceiroFiltroSelecaoLancamentos';
import ExtratoFinanceiroModalEdicaoLancamento from '../components/ExtratoFinanceiroModalEdicaoLancamento';
import NovoLancamentoModal from '../../novo-lancamento/components/NovoLancamentoModal';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import ExtratoFinanceiroTabelaLancamentos from '../components/extrato-financeiro-tabela-lancamentos/ExtratoFinanceiroTabelaLancamentos';

// Contexto
import { useModal } from '../../../context/ModalContext';

// MUI
import {
    Box, Typography, Divider,
    Collapse, Fab, Dialog, DialogTitle, DialogContent,
    DialogActions, Button, useMediaQuery, useTheme
} from '@mui/material';
import { Add, ExpandLess, ExpandMore, FilterList } from '@mui/icons-material';

const ExtratoFinanceiroPage = () => {
    const { abrirModal } = useModal();



    const [filtros, setFiltros] = useState({ dataInicial: '', dataFinal: '', tipo: '' });
    const [filtrosAvancados, setFiltrosAvancados] = useState({});
    const [receitas, setReceitas] = useState([
        { id: 1, data: '2025-04-01', categoria: 'Vendajljj', formaRecebimento: 'Pix', descricao: 'Produto X', valor: 500 },
    ]);
    const [despesas, setDespesas] = useState([
        { id: 2, data: '2025-04-02', categoria: 'Compra', formaRecebimento: 'Cartão', descricao: 'Fornecedor Y', valor: 200 },
    ]);

    const [dadosLancamento, setDadosLancamento] = useState(null);
    const [mostrarReceitas, setMostrarReceitas] = useState(true);
    const [mostrarDespesas, setMostrarDespesas] = useState(true);
    const [idParaExcluir, setIdParaExcluir] = useState(null);
    const [filtroDialogAberto, setFiltroDialogAberto] = useState(false);

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
        padding: '8px',
        borderRadius: '4px',
        color: corTexto,
        backgroundColor: corFundo,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none',
        fontWeight: 600
    });


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery('(max-width:450px)');
    const [filtroExpandido, setFiltroExpandido] = useState(true);

    // Atualiza o estado do filtro ao detectar mudança no tamanho da tela
    useEffect(() => {
        setFiltroExpandido(!isSmallScreen);
    }, [isSmallScreen]);

    return (
        <Box>

            {/* Barra superior com filtros e pesquisa */}
            <Box
                sx={{
                    width: '90%',
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: isMobile ? 'center' : 'space-between',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    my: 2,
                    mt: 4,
                    backgroundColor: 'rgba(162, 0, 255, 0)',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        maxWidth: isSmallScreen
                            ? filtroExpandido
                                ? '100%'
                                : '79%'
                            : '50%',
                        backgroundColor: 'rgba(255, 0, 0, 0)',
                    }}
                >
                    <BarraPesquisaPalavrasChave />
                </Box>

                <Box>
                    <FiltroSelecaoDatas
                        filtroExpandido={filtroExpandido}
                        setFiltroExpandido={setFiltroExpandido}
                    />
                </Box>
            </Box>


            {/* Receitas e Despesas */}
            <Box
                sx={{
                    width: '85%',
                    mx: 'auto',
                    backgroundColor: 'rgba(162, 0, 255, 0)',
                    borderRadius: 2,
                    padding: '0.5%',
                }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    onClick={() => setMostrarReceitas(!mostrarReceitas)}
                    sx={estiloTitulo('#77AF51',)}
                >
                    RECEITAS {mostrarReceitas ? <ExpandLess /> : <ExpandMore />}
                </Typography>
                <Collapse in={mostrarReceitas}>
                    <ExtratoFinanceiroTabelaLancamentos
                        dados={receitas}
                        corHeader="#565656"
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
                    sx={estiloTitulo('#E37373',)}
                >
                    DESPESAS {mostrarDespesas ? <ExpandLess /> : <ExpandMore />}
                </Typography>
                <Collapse in={mostrarDespesas}>
                    <ExtratoFinanceiroTabelaLancamentos
                        dados={despesas}
                        corHeader="#565656"
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

            {/* Modal de novo lançamento */}
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
            </Dialog><Dialog
                open={!!idParaExcluir}
                onClose={() => setIdParaExcluir(null)}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        fontWeight: 'bold',
                        color: '#48673A',
                        borderBottom: '1px solid #E0E0E0',
                        backgroundColor: '#F5F5F5',
                    }}
                >
                    Confirmar Exclusão
                </DialogTitle>

                <DialogContent sx={{ px: 3, pt: 2 }}>
                    <Typography sx={{ color: '#565656', mt: 2, }}>
                        Tem certeza que deseja excluir este lançamentooo?
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'flex-end' }}>
                    <Button
                        onClick={() => setIdParaExcluir(null)}
                        variant="outlined"
                        sx={{
                            borderColor: '#48673A',
                            color: '#48673A',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#E6F0E6',
                                borderColor: '#48673A'
                            }
                        }}
                    >
                        Cancelar
                    </Button>

                    <Button
                        onClick={excluirLancamento}
                        variant="contained"
                        sx={{
                            backgroundColor: '#C0392B',
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#A93226'
                            }
                        }}
                    >
                        Excluir
                    </Button>
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
