// components/Forms/CategoriaAutocomplete.js
import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const categoriasReceita = ["Salário", "Empréstimo", "Investimento"];
const categoriasDespesa = ["Alimentação", "Saúde", "Lazer", "Educação"];

const CategoriaAutocomplete = ({ tipo, categoria, setCategoria }) => {
  const opcoes = tipo === "Receita" ? categoriasReceita : categoriasDespesa;
  const label = tipo === "Receita" ? "Categoria de receita" : "Categoria de despesa";

  return (
    <Autocomplete
      fullWidth
      freeSolo
      options={opcoes}
      value={categoria}
      onChange={(event, newValue) => setCategoria(newValue)}
      onInputChange={(event, newInputValue) => setCategoria(newInputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
        />
      )}
      sx={{ mb: 2 }}
    />
  );
};

export default CategoriaAutocomplete;
