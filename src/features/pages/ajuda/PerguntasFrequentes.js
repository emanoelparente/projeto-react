// src/pages/ajuda/PerguntasFrequentes.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PerguntasFrequentes() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Título estilizado */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          p: 2,
          background: "linear-gradient(135deg, #77AF51, #c6da56ff)",
          color: "white",
          borderRadius: 2,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Perguntas Frequentes (FAQ)
      </Typography>

      {/* Perguntas */}
      <Accordion
        sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 2,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Como faço para alterar minha senha?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vá até as configurações da conta e selecione <b>"Alterar Senha"</b>. 
            Insira a senha atual e a nova senha desejada. 
            Recomendamos utilizar senhas fortes com letras, números e caracteres especiais.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 2,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Posso recuperar dados excluídos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Infelizmente, dados excluídos permanentemente não podem ser recuperados. 
            Se precisar, utilize a opção de backup disponível nas configurações.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 2,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Como entro em contato com o suporte?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Você pode acessar a seção <b>"Contato com Suporte"</b> na Central de Ajuda 
            ou enviar um e-mail diretamente para suporte@exemplo.com.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 2,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Posso usar o sistema em mais de um dispositivo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sim! O sistema pode ser acessado em diferentes dispositivos, 
            desde que você utilize a mesma conta para login.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 2,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">Meus dados estão seguros?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sim, utilizamos criptografia e boas práticas de segurança para proteger suas informações. 
            Além disso, você pode configurar autenticação em duas etapas para maior proteção.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
