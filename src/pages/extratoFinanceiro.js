import React, { useState } from 'react';
import SaldoAtual from '../components/saldoConta';
import FiltroSelecaoDatas from '../components/filtroSelecaoDatas';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ExtratoFinanceiro = () => {
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
  ]);

  const handleFiltroChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const aplicarFiltro = () => {
    console.log('Aplicando filtro:', filtros);
    // Aqui você pode filtrar os dados de receitas
  };

  const editarReceita = (id) => {
    console.log('Editar receita', id);
  };

  const apagarReceita = (id) => {
    setReceitas(receitas.filter((r) => r.id !== id));
  };

  return (
    <Box p={3} maxWidth="1200px" mx="auto">
  <SaldoAtual />

  <FiltroSelecaoDatas
    filtros={filtros}
    onChange={handleFiltroChange}
    onBuscar={aplicarFiltro}
  />

  <Box mt={4}>
    <Typography variant="h6" gutterBottom>Receitas</Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
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
  </Box>
</Box>

  );
};

export default ExtratoFinanceiro;



