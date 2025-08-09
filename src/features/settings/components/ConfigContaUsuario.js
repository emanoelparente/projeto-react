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
    <Box>
      {/* Título */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#77AF51' }}>
        Informações da Conta
      </Typography>

      {/* Informações Pessoais */}
      <Box mb={3}>
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

      {/* Segurança */}
      <Box mt={3} mb={3}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Segurança de Acesso
        </Typography>
        <TextField
          fullWidth
          label="Senha Atual"
          type="password"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Nova Senha"
          type="password"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirmar Nova Senha"
          type="password"
          margin="normal"
        />

        <Button
          variant="outlined"
          sx={{ mt: 2, borderColor: '#77AF51', color: '#77AF51' }}
        >
          Ativar Autenticação em Dois Fatores
        </Button>
      </Box>

      <Divider />

      {/* Preferências */}
      <Box mt={3} mb={3}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Preferências de Conta
        </Typography>
        <TextField
          fullWidth
          select
          label="Idioma"
          margin="normal"
          SelectProps={{ native: true }}
        >
          <option value="pt-BR">Português (Brasil)</option>
          <option value="en-US">English (US)</option>
          <option value="es-ES">Español</option>
        </TextField>

        <TextField
          fullWidth
          select
          label="Fuso Horário"
          margin="normal"
          SelectProps={{ native: true }}
        >
          <option value="America/Sao_Paulo">GMT-3 Brasília</option>
          <option value="America/New_York">GMT-5 Nova York</option>
          <option value="Europe/Lisbon">GMT+0 Lisboa</option>
        </TextField>

        <TextField
          fullWidth
          select
          label="Formato de Data"
          margin="normal"
          SelectProps={{ native: true }}
        >
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
        </TextField>
      </Box>

      <Divider />

      {/* Ações Administrativas */}
      <Box mt={3}>
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
