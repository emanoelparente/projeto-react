import React, { useState, useEffect } from 'react';
import { Box, Fab, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import DividasPagarTabelaLancamentos from '../components/dividas-pagar-tabela-lancamentos/DividasPagarTabelaLancamentos';
import DividasPagarModalIncluirLancamento from '../components/dividas-pagar-modal-incluir-lancamento/DividasPagarModalIncluirLancamento';
import DividasPagarModalEditarLancamento from '../components/dividas-pagar-modal-editar-lancamento/DividasPagarModalEditarLancamento';

const DividasPagarPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  const [filtroExpandido, setFiltroExpandido] = useState(true);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
  const [dividas, setDividas] = useState([]);
  const [dividaSelecionada, setDividaSelecionada] = useState(null);

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
    };
    setDividaSelecionada(dividaMapeada);
    setModalEdicaoAberto(true);
  };

  const salvarEdicaoDivida = (dividaEditada) => {
    setDividas(prev => prev.map(d => d.id === dividaEditada.id ? dividaEditada : d));
    setModalEdicaoAberto(false);
  };

  const excluirDivida = (id) => {
    setDividas(prev => prev.filter(d => d.id !== id));
  };

  const quitarDivida = (divida) => {
    console.log('Quitar dívida:', divida);
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
        onExcluir={excluirDivida}
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
    </Box>
  );
};

export default DividasPagarPage;
