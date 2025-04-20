import React, { useState } from 'react';

// Componentes personalizados
import SaldoAtual from '../components/saldoConta';
import FiltroSelecaoDatas from '../components/filtroSelecaoDatas';
import ModalEdicaoLancamento from '../components/Forms/modalEdicaoLancamento';
import NovoLancamento from '../components/Forms/novoLancamento';

// Contexto
import { useModal } from '../context/modalContext';

// MUI
import {
    Box, Typography, TableContainer, Paper, Divider,
    Collapse, Fab, Dialog, DialogTitle, DialogContent,
    DialogActions, Button
} from '@mui/material';
import { Add, ExpandLess, ExpandMore } from '@mui/icons-material';

// Ícones de ação estão importados no componente TabelaLancamentos

// Componente de tabela reutilizável
import TabelaLancamentos from '../components/tabelaLancamentos';

const ExtratoFinanceiro = () => {
    const { abrirModal } = useModal();
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

            <FiltroSelecaoDatas filtros={filtros} onChange={(e) => setFiltros({ ...filtros, [e.target.name]: e.target.value })} onBuscar={() => console.log(filtros)} />

            <Box
                sx={{
                    mt: {
                        xs: 2,  // menor margem para telas menores que 600px
                        sm: 3,  // um pouco maior para telas até 900px
                        md: 4   // padrão para 901px ou mais
                    }
                }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    onClick={() => setMostrarReceitas(!mostrarReceitas)}
                    sx={estiloTitulo('#386641', '#d3f4c7')}
                >
                    RECEITAS {mostrarReceitas ? <ExpandLess /> : <ExpandMore />}
                </Typography>
                <Collapse in={mostrarReceitas}>
                    <TabelaLancamentos
                        dados={receitas}
                        corCabecalho="#386641"
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
                    <TabelaLancamentos
                        dados={despesas}
                        corCabecalho="#9d0208"
                        tipo="despesa"
                        onEditar={editarLancamento}
                        onExcluir={confirmarExclusao}
                    />
                </Collapse>
            </Box>


            {dadosLancamento && (
                <ModalEdicaoLancamento dadosLancamento={dadosLancamento} onSalvar={atualizarLancamento} />
            )}

            <NovoLancamento />

            {/* FAB */}
            <Fab color="primary" aria-label="add" onClick={abrirModal} sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                <Add />
            </Fab>

            {/* Diálogo de confirmação */}
            <Dialog open={!!idParaExcluir} onClose={() => setIdParaExcluir(null)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>Tem certeza que deseja excluir este lançamento?</DialogContent>
                <DialogActions>
                    <Button onClick={() => setIdParaExcluir(null)}>Cancelar</Button>
                    <Button onClick={excluirLancamento} color="error">Excluir</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ExtratoFinanceiro;
