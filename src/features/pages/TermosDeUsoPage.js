// src/pages/TermoDeUsoPage.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function TermoDeUsoPage() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Container com fundo e estilo */}
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
          Termos de Uso
        </Typography>
      </Paper>

      {/* Conteúdo dos termos */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>1. Aceitação dos Termos</Typography>
        <Typography paragraph>
          Ao acessar e utilizar este aplicativo/website, você concorda em cumprir e estar legalmente vinculado a estes Termos de Uso. Caso não concorde com algum dos termos, recomendamos que não utilize nossos serviços.
        </Typography>

        <Typography variant="h6" gutterBottom>2. Modificações dos Termos</Typography>
        <Typography paragraph>
          Reservamo-nos o direito de alterar, modificar ou atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. A versão mais recente estará sempre disponível nesta página, e o uso contínuo dos serviços após qualquer alteração constitui a aceitação dos novos termos.
        </Typography>

        <Typography variant="h6" gutterBottom>3. Uso Permitido</Typography>
        <Typography paragraph>
          Você concorda em utilizar o aplicativo/website apenas para fins lícitos e de acordo com a legislação vigente. É proibido:
        </Typography>
        <ul>
          <li>Utilizar os serviços para fins fraudulentos ou ilegais;</li>
          <li>Violar direitos de propriedade intelectual ou industrial;</li>
          <li>Distribuir vírus, malware ou qualquer outro código malicioso;</li>
          <li>Tentar acessar áreas restritas ou sistemas sem autorização.</li>
        </ul>

        <Typography variant="h6" gutterBottom>4. Cadastro e Conta de Usuário</Typography>
        <Typography paragraph>
          Para utilizar determinadas funcionalidades, pode ser necessário criar uma conta. Você é responsável por fornecer informações verdadeiras e mantê-las atualizadas, bem como proteger sua senha e credenciais de acesso.
        </Typography>

        <Typography variant="h6" gutterBottom>5. Propriedade Intelectual</Typography>
        <Typography paragraph>
          Todo o conteúdo, incluindo textos, imagens, logotipos, ícones, layout e código-fonte, é de propriedade exclusiva da nossa empresa ou de seus licenciadores, sendo protegido pelas leis de direitos autorais e propriedade intelectual.
        </Typography>

        <Typography variant="h6" gutterBottom>6. Limitação de Responsabilidade</Typography>
        <Typography paragraph>
          Não nos responsabilizamos por danos diretos, indiretos, acidentais ou consequenciais resultantes do uso ou da impossibilidade de uso do aplicativo/website, incluindo perda de dados ou lucros cessantes.
        </Typography>

        <Typography variant="h6" gutterBottom>7. Disponibilidade dos Serviços</Typography>
        <Typography paragraph>
          Envidaremos esforços para manter o serviço disponível continuamente, mas não garantimos que o acesso será ininterrupto, livre de erros ou seguro. Poderemos suspender ou encerrar o serviço a qualquer momento, por motivos técnicos, de segurança ou manutenção.
        </Typography>

        <Typography variant="h6" gutterBottom>8. Links para Terceiros</Typography>
        <Typography paragraph>
          Nosso aplicativo/website pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas desses sites externos.
        </Typography>

        <Typography variant="h6" gutterBottom>9. Privacidade</Typography>
        <Typography paragraph>
          O uso dos nossos serviços também está sujeito à nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações pessoais.
        </Typography>

        <Typography variant="h6" gutterBottom>10. Legislação Aplicável</Typography>
        <Typography paragraph>
          Estes Termos de Uso serão regidos e interpretados de acordo com as leis do país onde a empresa está estabelecida, ficando eleito o foro da comarca da sede da empresa para dirimir eventuais conflitos.
        </Typography>

        <Typography variant="h6" gutterBottom>11. Contato</Typography>
        <Typography paragraph>
          Se tiver dúvidas sobre estes Termos de Uso, entre em contato pelo nosso canal de atendimento.
        </Typography>
      </Box>
    </Box>
  );
}
