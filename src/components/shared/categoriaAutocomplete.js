import { Autocomplete, TextField } from "@mui/material";

const CategoriaAutocomplete = ({ tipo, categoria, setCategoria, required }) => {
  const opcoesReceita = ["Salário", "Empréstimo", "Investimento"];
  const opcoesDespesa = ["Alimentação", "Saúde", "Lazer", "Educação"];
  const opcoes = tipo === "Receita" ? opcoesReceita : opcoesDespesa;

  return (
    <Autocomplete
      options={opcoes}
      value={categoria}
      onChange={(e, val) => setCategoria(val || "")}
      renderInput={(params) => (
        <TextField
          {...params}
          label={tipo === "Receita" ? "Categoria de receita" : "Categoria de despesa"}
          required={required}
          name="categoria"
        />
      )}
      fullWidth
      sx={{ mb: 2 }}
    />
  );
};

export default CategoriaAutocomplete;
