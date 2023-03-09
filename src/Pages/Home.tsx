import { Typography, Select, AppBar, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import NavBarTitulo from "../Componentes/NavBarTitulo";
import NavBarInfo from "../Componentes/NavBarInfor";
import axios from "axios";
import { Block } from "@mui/icons-material";
import HistoryBar from "../Componentes/HistoryBar";

export default function Home() {
  useEffect(() => {
    puxardados();
  }, []);

  async function puxardados() {
    const dados = await axios.get("http://localhost:5000/recursos");
  }

  return (
    <Box
      border="solid"
      bgcolor={"black"}
      minWidth="100vh"
      minHeight={"90vh"}
      justifyContent="center"
    >
      <NavBarTitulo />
      <Box
        display={"static"}
        border="dashed"
        borderColor={"white"}
        maxWidth="40vh"
        marginTop={"0%"}
        marginLeft="0%"
        minHeight={"60vh"}
      >
        <NavBarInfo />
      </Box>
      <Box minHeight="0vh" maxWidth={"800vh"}>
        <HistoryBar />
      </Box>
    </Box>
  );
}
