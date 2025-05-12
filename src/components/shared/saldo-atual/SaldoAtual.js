import React from "react";
import { Box, Typography } from "@mui/material";
import "./SaldoAtual.css";

const SaldoAtual = ({ saldo }) => {
    return (
        <Box className="saldo-container">
            <Box className="saldo-label">
                <Typography variant="h6">
                    Saldo atual
                </Typography>
            </Box>
            <Box className="saldo-valores">
                <Typography variant="h5">
                    R$
                </Typography>
                <Typography variant="h5" textAlign="right">
                    {saldo}
                </Typography>
            </Box>
        </Box>
    );
};

export default SaldoAtual;