import React, { useState, useEffect } from 'react';
import {
  Box, Fab, useMediaQuery, Dialog,
  DialogTitle, DialogContent, DialogContentText,
  DialogActions, Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import DividasPagarTabelaLancamentos from '../components/dividas-pagar-tabela-lancamentos/DividasPagarTabelaLancamentos';
import DividasPagarModalIncluirLancamento from '../components/dividas-pagar-modal-incluir-lancamento/DividasPagarModalIncluirLancamento';
import DividasPagarModalEditarLancamento from '../components/dividas-pagar-modal-editar-lancamento/DividasPagarModalEditarLancamento';
import DividasPagarModalQuitarDivida from '../components/dividas-pagar-modal-quitar-divida/DividasPagarModalQuitarDivida';



const DividasPagarPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  const [modalQuitarAberto, setModalQuitarAberto] = useState(false);
  const [filtroExpandido, setFiltroExpandido] = useState(true);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
  const [dividas, setDividas] = useState([]);
  const [dividaSelecionada, setDividaSelecionada] = useState(null);
  const [confirmarExclusaoAberto, setConfirmarExclusaoAberto] = useState(false);
  const [dividaParaExcluir, setDividaParaExcluir] = useState(null);

  useEffect(() => {
    setFiltroExpandido(!isSmallScreen);
  }, [isSmallScreen]);

  useEffect(() => {
    const mock = [
      {
        id: 1,
        nome: 'Aluguel',
        descricao: 'Apartamento mensal',
        credor: 'Imobiliária Silvaa',
        vencimento: '2024-06-10',
        valorTotal: '1500.00',
        numeroParcelas: 1,
        valorParcela: '1500.00',
        situacao: 'A vencer',
      },
      {
        id: 2,
        nome: 'Cartão de Crédito',
        descricao: 'Fatura cartão',
        credor: 'Nubank',
        vencimento: '2025-07-05',
        valorTotal: '800.00',
        numeroParcelas: 1,
        valorParcela: '800.00',
        situacao: 'Vencido',
      },
      {
        id: 3,
        nome: 'Financiamento',
        descricao: 'Carro financiado',
        credor: 'Banco ABC',
        vencimento: '2025-05-30',
        valorTotal: '950.00',
        numeroParcelas: 1,
        valorParcela: '950.00',
        situacao: 'Pago',
      },
    ];
    setDividas(mock);
  }, []);

  const adicionarDivida = (novaDivida) => {
    setDividas(prev => [...prev, { ...novaDivida, id: Date.now() }]);
  };

  const editarDivida = (dividaOriginal) => {
    const dividaMapeada = {
      id: dividaOriginal.id,
      nome: dividaOriginal.nome || '',
      descricao: dividaOriginal.descricao || '',
      credor: dividaOriginal.credor || '',
      vencimento: dividaOriginal.vencimento || '',
      valorTotal: dividaOriginal.valorTotal || '',
      numeroParcelas: dividaOriginal.numeroParcelas || 1,
      valorParcela: dividaOriginal.valorParcela || '',
      situacao: dividaOriginal.situacao || '',
    };
    setDividaSelecionada(dividaMapeada);
    setModalEdicaoAberto(true);
  };

  const salvarEdicaoDivida = (dividaEditada) => {
    setDividas(prev => prev.map(d => d.id === dividaEditada.id ? dividaEditada : d));
    setModalEdicaoAberto(false);
  };

  const pedirConfirmacaoExclusao = (id) => {
    const divida = dividas.find(d => d.id === id);
    setDividaParaExcluir(divida);
    setConfirmarExclusaoAberto(true);
  };

  const confirmarExclusao = () => {
    setDividas(prev => prev.filter(d => d.id !== dividaParaExcluir.id));
    setConfirmarExclusaoAberto(false);
    setDividaParaExcluir(null);
  };

  const quitarDivida = (divida) => {
    setDividaSelecionada(divida);
    setModalQuitarAberto(true);
  };

  const quitarComSaldo = () => {
    // Aqui você pode abrir o modal de Nova Despesa já preenchido
    console.log('Quitar com saldo:', dividaSelecionada);
    setModalQuitarAberto(false);
    // TODO: abrir modal de nova despesa aqui
  };

  const quitarManual = () => {
    console.log('Quitar manualmente:', dividaSelecionada);
    setModalQuitarAberto(false);
    setModalEdicaoAberto(true); // Abre o modal de edição para o usuário alterar manualmente
  };


  return (
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
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: isSmallScreen ? (filtroExpandido ? '100%' : '79%') : '50%'
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

      <DividasPagarTabelaLancamentos
        dados={dividas}
        onEditar={editarDivida}
        onExcluir={pedirConfirmacaoExclusao}
        onQuitar={quitarDivida}
      />

      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setModalAberto(true)}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Add />
      </Fab>

      <DividasPagarModalIncluirLancamento
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        onSalvar={adicionarDivida}
      />

      <DividasPagarModalEditarLancamento
        aberto={modalEdicaoAberto}
        onFechar={() => setModalEdicaoAberto(false)}
        divida={dividaSelecionada}
        onSalvar={salvarEdicaoDivida}
      />

      <Dialog
        open={confirmarExclusaoAberto}
        onClose={() => setConfirmarExclusaoAberto(false)}
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
          <DialogContentText sx={{ color: '#565656' , mt: 2,}}>
            Tem certeza que deseja excluir a dívida{' '}
            <Box component="span" sx={{ fontWeight: 'bold', color: '#C0392B' }}>
              {dividaParaExcluir?.nome}
            </Box>
            ?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'flex-end' }}>
          <Button
            onClick={() => setConfirmarExclusaoAberto(false)}
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
            onClick={confirmarExclusao}
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



      <DividasPagarModalQuitarDivida
        aberto={modalQuitarAberto}
        onFechar={() => setModalQuitarAberto(false)}
        divida={dividaSelecionada}
        onQuitarComSaldo={quitarComSaldo}
        onQuitarManual={quitarManual}
      />

    </Box>

  );
};

export default DividasPagarPage;
