// src/pages/ajuda/PerguntasFrequentes.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PerguntasFrequentes() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Perguntas Frequentes (FAQ)
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Como faço para alterar minha senha?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vá até as configurações da conta e selecione "Alterar Senha". Insira a senha atual e a nova senha desejada.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Posso recuperar dados excluídos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Infelizmente, dados excluídos permanentemente não podem ser recuperados. Certifique-se antes de excluir.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
