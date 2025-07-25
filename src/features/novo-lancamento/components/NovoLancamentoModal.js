import React, { useState, useEffect } from "react";
import CategoriaAutocomplete from "../../../components/shared/CategoriaAutocomplete";
import { NumericFormat } from "react-number-format";
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
  Divider,
} from "@mui/material";
import { useModal } from '../../../context/ModalContext';

const NovoLancamentoModal = () => {
  const { modalAberto, fecharModal, dadosIniciais } = useModal();

  const [tipo, setTipo] = useState("Receita");
  const [categoria, setCategoria] = useState("");
  const [forma, setForma] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagemAberta, setMensagemAberta] = useState(false);

  const handleSalvar = (e) => {
    e.preventDefault();
    setMensagemAberta(true);
    fecharModal();
  };

  const handleCloseSnackbar = () => {
    setMensagemAberta(false);
  };

  useEffect(() => {
    if (modalAberto) {
      setTipo(dadosIniciais?.tipo || "Receita");
      setCategoria(dadosIniciais?.categoria || "");
      setForma(dadosIniciais?.forma || "");
      setData(dadosIniciais?.data || "");
      setValor(dadosIniciais?.valor || "");
      setDescricao(dadosIniciais?.descricao || "");
    }
  }, [modalAberto, dadosIniciais]);

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
            bgcolor: "#FFFFFF",
            boxShadow: 24,
            borderRadius: 2,
            width: 500,
            maxWidth: "90%",
            p: 0,
            overflow: "hidden"
          }}
        >
          {/* Cabeçalho */}
          <Box sx={{ backgroundColor: "#77AF51", px: 3, pt: 3, pb: 1 }}>
            <Typography
              variant="h6"
              component="h2"
              sx={{ color: "#FFFFFF", fontWeight: "bold" }}
            >
              Novo Lançamento
            </Typography>
            <Divider sx={{ mt: 1, borderColor: "#FFFFFF", opacity: 0.2 }} />
          </Box>

          {/* Conteúdo */}
          <Box sx={{ p: 3, backgroundColor: "#F8FAF8" }}>
            <Typography variant="subtitle2" gutterBottom sx={{ color: "#565656ff" }}>
              Tipo de Lançamento
            </Typography>

            <ToggleButtonGroup
              value={tipo}
              exclusive
              onChange={(e, val) => val && setTipo(val)}
              fullWidth
              sx={{
                mb: 2,
                '& .MuiToggleButton-root': {
                  fontWeight: 'bold',
                  border: '1px solid #ccc',
                  borderRadius: 1,
                  color: "#565656",
                  backgroundColor: "#FFFFFF",
                },
                '& .Mui-selected': {
                  color: '#FFFFFF',
                  backgroundColor: tipo === 'Receita' ? '#77AF51' : '#D44848',
                  borderColor: tipo === 'Receita' ? '#659743' : '#BD3535',
                }
              }}
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
              onValueChange={(values) => {
                setValor(values.value);
              }}
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
              <Button
                variant="outlined"
                onClick={fecharModal}
                sx={{
                  color: "#565656",
                  borderColor: "#565656",
                  '&:hover': {
                    backgroundColor: "#f0f0f0",
                    borderColor: "#565656",
                  }
                }}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#77AF51",
                  '&:hover': {
                    backgroundColor: "rgba(83, 129, 65, 1)"
                  }
                }}
              >
                Salvar
              </Button>
            </Stack>
          </Box>
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

export default NovoLancamentoModal;
