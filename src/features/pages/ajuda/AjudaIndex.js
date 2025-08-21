// src/pages/ajuda/AjudaIndex.js
import React from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AjudaIndex() {
    return (
        <Box sx={{ p: 3 }}>
            {/* Cabeçalho */}
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    background: "linear-gradient(135deg, #77AF51, #c6da56ff)",
                    color: "#fff",
                    borderRadius: 3,
                }}
            >
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Central de Ajuda
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
                <Typography paragraph>
                    Bem-vindo à Central de Ajuda. Aqui você encontra respostas para as dúvidas mais comuns
                    e pode entrar em contato com nossa equipe de suporte.
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Button
                        component={Link}
                        to="/ajuda/faq"
                        sx={{
                            flex: 1, // ocupa espaço igual
                            background: "linear-gradient(135deg, #77AF51, #c6da56ff)",
                            color: "#fff",
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                            textAlign: "center",
                            p: 1.5,
                            "&:hover": {
                                background: "linear-gradient(135deg, #6a994e, #a9c34c)",
                            },
                        }}
                    >
                        Perguntas Frequentes
                    </Button>

                    <Button
                        component={Link}
                        to="/ajuda/primeiros-passos"
                        sx={{
                            flex: 1,
                            background: "linear-gradient(135deg, #56c6da, #4eb5a9)",
                            color: "#fff",
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                            textAlign: "center",
                            p: 1.5,
                            "&:hover": {
                                background: "linear-gradient(135deg, #3ba5c0, #3f9185)",
                            },
                        }}
                    >
                        Primeiros Passos
                    </Button>

                    <Button
                        component={Link}
                        to="/ajuda/contato"
                        sx={{
                            flex: 1,
                            background: "linear-gradient(135deg, #e07a5f, #eb5e28)",
                            color: "#fff",
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: "bold",
                            textAlign: "center",
                            p: 1.5,
                            "&:hover": {
                                background: "linear-gradient(135deg, #d55c3f, #c94c22)",
                            },
                        }}
                    >
                        Contato com Suporte
                    </Button>
                </Stack>


            </Box>
        </Box>
    );
}
