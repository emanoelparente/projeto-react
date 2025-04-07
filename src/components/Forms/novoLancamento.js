import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Snackbar,
} from "@mui/material";
import { useModal } from "../../context/modalContext";

const NovoLancamento = () => {
  const { modalAberto, fecharModal } = useModal();

  const [tipo, setTipo] = useState("Receita");
  const [categoria, setCategoria] = useState("");
  const [forma, setForma] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagemAberta, setMensagemAberta] = useState(false);

  const handleSalvar = (e) => {
    e.preventDefault();
    // Aqui você pode salvar os dados
    setMensagemAberta(true);
    fecharModal();
  };

  const handleCloseSnackbar = () => {
    setMensagemAberta(false);
  };

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
            Novo Lançamento
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

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>
              {tipo === "Receita"
                ? "Categoria de receita"
                : "Categoria de despesa"}
            </InputLabel>
            <Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              label="Categoria"
            >
              {tipo === "Receita" ? (
                <>
                  <MenuItem value="Salário">Salário</MenuItem>
                  <MenuItem value="Empréstimo">Empréstimo</MenuItem>
                  <MenuItem value="Investimento">Investimento</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem value="Alimentação">Alimentação</MenuItem>
                  <MenuItem value="Saúde">Saúde</MenuItem>
                  <MenuItem value="Lazer">Lazer</MenuItem>
                  <MenuItem value="Educação">Educação</MenuItem>
                </>
              )}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
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
          />

          <TextField
            fullWidth
            label="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            sx={{ mb: 3 }}
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
        message="Lançamento criado com sucesso!"
      />
    </>
  );
};

export default NovoLancamento;