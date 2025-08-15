// src/pages/PoliticaDePrivacidadePage.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function PoliticaDePrivacidadePage() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Cabeçalho */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          background: 'linear-gradient(135deg, #77AF51, #BCCD5D)',
          color: '#fff',
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Política de Privacidade
        </Typography>
      </Paper>

      {/* Conteúdo */}
      <Box
        mt={3}
        sx={{
          p: { xs: 0, md: 4 },
          '@media (min-width:1017px)': {
            px: 10,
          },
          color: '#212529',
          fontSize: '0.90rem',

          '& .MuiTypography-h6': {
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: 2,
            color: '#6a994e',
          },

          '& p': {
            fontSize: '0.95rem',
            lineHeight: 1.6,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>1. Introdução</Typography>
        <Typography paragraph>
          Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais
          dos usuários do nosso aplicativo/website. Ao utilizar nossos serviços, você concorda com as práticas
          descritas nesta política.
        </Typography>

        <Typography variant="h6" gutterBottom>2. Informações Coletadas</Typography>
        <Typography paragraph>
          Podemos coletar informações pessoais fornecidas diretamente por você, tais como:
        </Typography>
        <ul>
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Telefone</li>
          <li>Informações de pagamento</li>
        </ul>
        <Typography paragraph>
          Além disso, coletamos dados de uso do aplicativo, incluindo endereço IP, tipo de dispositivo e páginas acessadas.
        </Typography>

        <Typography variant="h6" gutterBottom>3. Uso das Informações</Typography>
        <Typography paragraph>
          As informações coletadas são utilizadas para:
        </Typography>
        <ul>
          <li>Fornecer e melhorar nossos serviços</li>
          <li>Personalizar a experiência do usuário</li>
          <li>Enviar comunicações importantes</li>
          <li>Cumprir obrigações legais</li>
        </ul>

        <Typography variant="h6" gutterBottom>4. Compartilhamento de Dados</Typography>
        <Typography paragraph>
          Não vendemos ou alugamos suas informações pessoais. Podemos compartilhar seus dados apenas com:
        </Typography>
        <ul>
          <li>Prestadores de serviços que auxiliam na operação do aplicativo</li>
          <li>Autoridades legais, quando exigido por lei</li>
        </ul>

        <Typography variant="h6" gutterBottom>5. Segurança das Informações</Typography>
        <Typography paragraph>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
          perda ou destruição. No entanto, nenhum sistema é totalmente seguro.
        </Typography>

        <Typography variant="h6" gutterBottom>6. Cookies e Tecnologias Semelhantes</Typography>
        <Typography paragraph>
          Utilizamos cookies para melhorar a experiência do usuário, analisar o tráfego e personalizar o conteúdo.
          Você pode desativar os cookies nas configurações do seu navegador, mas isso pode limitar algumas funcionalidades.
        </Typography>

        <Typography variant="h6" gutterBottom>7. Direitos do Usuário</Typography>
        <Typography paragraph>
          Você possui o direito de acessar, corrigir, excluir ou solicitar a portabilidade de suas informações pessoais.
          Para exercer esses direitos, entre em contato conosco.
        </Typography>

        <Typography variant="h6" gutterBottom>8. Alterações nesta Política</Typography>
        <Typography paragraph>
          Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise regularmente
          para estar ciente de quaisquer alterações.
        </Typography>

        <Typography variant="h6" gutterBottom>9. Contato</Typography>
        <Typography paragraph>
          Caso tenha dúvidas sobre esta Política de Privacidade, entre em contato pelo nosso canal de atendimento.
        </Typography>
      </Box>
    </Box>
  );
}
