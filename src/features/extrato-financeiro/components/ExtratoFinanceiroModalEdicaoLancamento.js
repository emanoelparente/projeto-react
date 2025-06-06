import React, { useState, useEffect } from "react";
import CategoriaAutocomplete from '../../../components/shared/CategoriaAutocomplete';

import { NumericFormat } from "react-number-format";
import { Modal, Box, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, ToggleButton, ToggleButtonGroup, Stack, Snackbar } from "@mui/material";
import { useModal } from '../../../context/ModalContext';

const ExtratoFinanceiroModalEdicaoLancamento = ({ dadosLancamento, onSalvar }) => {
  const { modalAberto, fecharModal } = useModal();

  const [tipo, setTipo] = useState(dadosLancamento.tipo || "Receita");
  const [categoria, setCategoria] = useState(dadosLancamento.categoria || "");
  const [forma, setForma] = useState(dadosLancamento.formaRecebimento || "");
  const [data, setData] = useState(dadosLancamento.data || "");
  const [valor, setValor] = useState(dadosLancamento.valor || "");
  const [descricao, setDescricao] = useState(dadosLancamento.descricao || "");
  const [mensagemAberta, setMensagemAberta] = useState(false);

  const handleSalvar = (e) => {
    e.preventDefault();
    onSalvar({
      id: dadosLancamento.id,  // Caso queira passar o id para identificar qual lançamento editar
      tipo,
      categoria,
      formaRecebimento: forma,
      data,
      valor,
      descricao,
    });
    setMensagemAberta(true);
    fecharModal();
  };

  const handleCloseSnackbar = () => {
    setMensagemAberta(false);
  };

  useEffect(() => {
    if (modalAberto) {
      setTipo(dadosLancamento.tipo || "Receita");
      setCategoria(dadosLancamento.categoria || "");
      setForma(dadosLancamento.formaRecebimento || "");
      setData(dadosLancamento.data || "");
      setValor(dadosLancamento.valor || "");
      setDescricao(dadosLancamento.descricao || "");
    }
  }, [modalAberto, dadosLancamento]);

  return (
    <>
      <Modal open={modalAberto} onClose={fecharModal}>
        <Box
          component="form"
          onSubmit={handleSalvar}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: 500,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Editar Lançamento
          </Typography>

          <Typography variant="subtitle2">Tipo de Lançamento</Typography>
          <ToggleButtonGroup
            value={tipo}
            exclusive
            onChange={(e, val) => val && setTipo(val)}
            fullWidth
            sx={{ mb: 2 }}
          >
            <ToggleButton value="Receita">Receita</ToggleButton>
            <ToggleButton value="Despesa">Despesa</ToggleButton>
          </ToggleButtonGroup>

          <CategoriaAutocomplete
            tipo={tipo}
            categoria={categoria}
            setCategoria={setCategoria}
            required
          />

          <FormControl fullWidth sx={{ mb: 2 }} required>
            <InputLabel>Forma</InputLabel>
            <Select
              value={forma}
              onChange={(e) => setForma(e.target.value)}
              label="Forma"
            >
              <MenuItem value="Dinheiro">Dinheiro</MenuItem>
              <MenuItem value="Pix">Pix</MenuItem>
              <MenuItem value="Débito">Débito</MenuItem>
              <MenuItem value="Crédito">Crédito</MenuItem>
              <MenuItem value="TED/DOC">TED/DOC</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            type="date"
            label="Data"
            InputLabelProps={{ shrink: true }}
            value={data}
            onChange={(e) => setData(e.target.value)}
            sx={{ mb: 2 }}
            required
          />

          <NumericFormat
            customInput={TextField}
            fullWidth
            label="Valor"
            value={valor}
            onValueChange={(values) => setValor(values.value)}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            sx={{ mb: 2 }}
            required
          />

          <TextField
            fullWidth
            label="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            sx={{ mb: 3 }}
            required
          />

          <Stack direction="row" justifyContent="space-between">
            <Button variant="outlined" color="error" onClick={fecharModal}>
              Cancelar
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Salvar
            </Button>
          </Stack>
        </Box>
      </Modal>

      <Snackbar
        open={mensagemAberta}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Lançamento atualizado com sucesso!"
      />
    </>
  );
};

export default ExtratoFinanceiroModalEdicaoLancamento;
