import React from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import SaldoAtual from '../../../components/shared/saldo-atual/SaldoAtual';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import DividasPagarTabelaLancamentos from '../components/dividas-pagar-tabela-lancamentos/DividasPagarTabelaLancamentos';

const DividasPagarPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md = 900px

  return (
    <Box sx={{ p: 2 }}>
      {/* Container com largura igual à da Tabela */}
      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          my: 2,
          backgroundColor: 'rgba(162, 0, 255, 0.27)',
        }}
      >
        {/* Pesquisa */}
        <Box sx={{ flexGrow: 1, maxWidth: 500 }}>
          <BarraPesquisaPalavrasChave />
        </Box>

        {/* Filtros e botão */}
        <Box>
          <FiltroSelecaoDatas />
        </Box>
      </Box>

      {/* Tabela */}
      <DividasPagarTabelaLancamentos />
    </Box>
  );
};

export default DividasPagarPage;
