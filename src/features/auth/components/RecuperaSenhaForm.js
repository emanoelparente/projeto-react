import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  InputAdornment,
} from "@mui/material";
import { MailOutline } from "@mui/icons-material";

const RecuperaSenhaForm = () => {
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
        ESQUECI A SENHA
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Informe o e-mail cadastrado para que possamos te ajudar a recuperar sua senha
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Endereço de e-mail"
          placeholder="Informe o e-mail cadastrado"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline color="action" />
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 2, py: 1.5 }}
        >
          ENVIAR EMAIL
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

export default RecuperaSenhaForm;
