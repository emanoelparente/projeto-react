import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Divider,
  Grid,
  IconButton
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function ConfigContaUsuario() {
  return (
    <Box sx={{
      p: 2,
      pl: { xs: 0, md: 5 },
    }}>
      {/* Título */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#77AF51' }}>
        Informações da Conta
      </Typography>

      {/* Informações Pessoais */}
      <Box
        mt={3}

      >
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Informações Pessoais
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<PhotoCamera />}
              component="label"
              size="small"
            >
              Alterar Foto
              <input hidden accept="image/*" type="file" />
            </Button>
          </Grid>
        </Grid>

        <TextField fullWidth label="Nome" margin="normal" />
        <TextField fullWidth label="E-mail" margin="normal" />
        <TextField fullWidth label="Telefone" margin="normal" />
      </Box>

      <Divider />



      {/* Ações Administrativas */}
      <Box
        mt={3}

      >
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
          Ações da Conta
        </Typography>
        <Button variant="outlined" color="warning" sx={{ mr: 2 }}>
          Desativar Conta Temporariamente
        </Button>
        <Button variant="outlined" color="error">
          Excluir Conta
        </Button>
      </Box>

      {/* Salvar */}
      <Box mt={4}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#77AF51',
            '&:hover': { backgroundColor: '#689c48' }
          }}
        >
          Salvar Alterações
        </Button>
      </Box>
    </Box>
  );
}
