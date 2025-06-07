import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  InputAdornment,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RedefinirSenhaForm = () => {
  const navigate = useNavigate();
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui poderia haver uma validação se as senhas coincidem etc.
    navigate("/login"); // Redireciona temporariamente
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" sx={{ color: "success.main", fontWeight: 600, mb: 1 }}>
        REDEFINIÇÃO DE SENHA
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Vamos criar uma nova senha para sua conta. Lembre-se de guardá-la em um lugar seguro.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          fullWidth
          type="password"
          placeholder="Nova senha"
          variant="outlined"
          margin="normal"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
          sx={{
            backgroundColor: 'white',
            mt: 0.9,
            mb: 1.5,
            borderRadius: 1.5,
            '& .MuiInputBase-root': { height: 52 },
            '& .MuiInputBase-input': {
              padding: '6px 10px',
              fontSize: '1rem',
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#777',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ fontSize: 20, color: '#aaa' }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          type="password"
          placeholder="Confirmar nova senha"
          variant="outlined"
          margin="normal"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          sx={{
            backgroundColor: 'white',
            mt: 0.9,
            mb: 1.5,
            borderRadius: 1.5,
            '& .MuiInputBase-root': { height: 52 },
            '& .MuiInputBase-input': {
              padding: '6px 10px',
              fontSize: '1rem',
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#777',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ fontSize: 20, color: '#aaa' }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="success"
          type="submit"
          sx={{ mt: 2, py: 1.5 }}
        >
          REDEFINIR SENHA
        </Button>
      </Box>

      <Box textAlign="center" mt={4}>
        <Typography variant="body2">
          Voltar para{" "}
          <Link href="/login" underline="hover" color="primary">
            login
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default RedefinirSenhaForm;
