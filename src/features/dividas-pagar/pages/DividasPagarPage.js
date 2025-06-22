import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FiltroSelecaoDatas from '../../../components/shared/filtro-selecao-datas/FiltroSelecaoDatas';
import BarraPesquisaPalavrasChave from '../../../components/shared/barra-pesquisa-palavras-chave/BarraPesquisaPalavrasChave';
import DividasPagarTabelaLancamentos from '../components/dividas-pagar-tabela-lancamentos/DividasPagarTabelaLancamentos';

const DividasPagarPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallScreen = useMediaQuery('(max-width:450px)');
    const [filtroExpandido, setFiltroExpandido] = useState(true);

    // Atualiza o estado do filtro ao detectar mudança no tamanho da tela
    useEffect(() => {
        setFiltroExpandido(!isSmallScreen);
    }, [isSmallScreen]);

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
                    backgroundColor: 'rgba(162, 0, 255, 0.53)',
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
                        backgroundColor: 'rgba(255, 0, 0, 0.53)',
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

            <DividasPagarTabelaLancamentos />
        </Box>
    );
};

export default DividasPagarPage;
