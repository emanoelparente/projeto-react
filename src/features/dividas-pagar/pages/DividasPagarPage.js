import React from 'react';
import { Box, Button } from '@mui/material';
import SaldoAtual from '../../../components/shared/saldo-atual/SaldoAtual';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import DividasPagarTabelaLancamentos from '../components/dividas-pagar-tabela-lancamentos/DividasPagarTabelaLancamentos';

const DividasPagarPage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <SaldoAtual />

      {/* Container com largura igual à da Tabela */}
      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'top',
          gap: 2,
          my: 2,
          backgroundColor: 'rgba(0, 123, 255, 0.1)'
        }}
      >
        {/* Pesquisa */}
        <Box sx={{ flexGrow: 1, maxWidth: 450 }}>
          <BarraPesquisaPalavrasChave />
        </Box>

        {/* Filtros e botão */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <FiltroSelecaoDatas />
        </Box>
      </Box>

      {/* Tabela */}
      <DividasPagarTabelaLancamentos />
    </Box>
  );
};

export default DividasPagarPage;
