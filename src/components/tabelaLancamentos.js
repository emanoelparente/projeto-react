import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, Tooltip
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const TabelaLancamentos = ({ dados, corCabecalho = '#000', tipo = '', onEditar, onExcluir }) => {
    const estiloCabecalho = {
        fontWeight: 'bold',
        color: corCabecalho,
        textTransform: 'uppercase',
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f1f1f1' }}>
                        <TableCell sx={estiloCabecalho}>Data</TableCell>
                        <TableCell sx={estiloCabecalho}>Categoria</TableCell>
                        <TableCell sx={estiloCabecalho}>
                            {tipo === 'receita' ? 'Forma de Recebimento' : 'Forma de Pagamento'}
                        </TableCell>
                        <TableCell sx={estiloCabecalho}>Descrição</TableCell>
                        <TableCell sx={estiloCabecalho}>Valor</TableCell>
                        <TableCell sx={estiloCabecalho} align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>


                <TableBody>
                    {dados.length > 0 ? (
                        dados.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.data}</TableCell>
                                <TableCell>{item.categoria}</TableCell>
                                <TableCell>{item.formaRecebimento}</TableCell>
                                <TableCell>{item.descricao}</TableCell>
                                <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <Tooltip title="Editar">
                                        <IconButton color="primary" onClick={() => onEditar(item)}>
                                            <Edit />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Excluir">
                                        <IconButton color="error" onClick={() => onExcluir(item.id)}>
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} align="center">Nenhum lançamento encontrado.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TabelaLancamentos;
