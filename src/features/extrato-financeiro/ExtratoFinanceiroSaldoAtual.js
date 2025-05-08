import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import '../../styles/ExtratoFinanceiroSaldoAtual.css';

const ExtratoFinanceiroSaldoAtual = ({ saldo }) => {
    return (
        <Grid item xs={12} sm={4}>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 600,
                    color: "#48673A",
                    mb: 0.5,
                }}
            >
                Saldo atual
            </Typography>

            <Box className="saldo-box">
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    R$
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {parseFloat(saldo).toFixed(2)}
                </Typography>
            </Box>
        </Grid>
    );
};

export default ExtratoFinanceiroSaldoAtual;
