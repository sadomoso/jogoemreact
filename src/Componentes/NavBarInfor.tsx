import {
  Typography,
  AppBar,
  Stack,
  List,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Select,
  InputLabel,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import axios from "axios";
import * as React from "react";

interface IDados {
  HomensEmpregados: number;
  HomensDesempregados: number;
  Mulheresempregadas: number;
  MulheresDesempregadas: number;
  CriançasDesempregadas: number;
  Grãos: number;
  Carnes: number;
  Frutas: number;
  Raizes: number;
  Polego: number;
  Couro: number;
  Madeira: number;
  Pedra: number;
  Minériodeferro: number;
  Barradeferro: number;
  Mineriodeprata: number;
  Barradeprata: number;
  Mineriodeouro: number;
  Barradeouro: number;
}
export let testedapuxada: any;

export default function NavBarInfo() {
  useEffect(() => {
    testedapuxada();
  }, []);

  const [coletado, setColetando] = useState<IDados[]>([]);

  testedapuxada = async function puxardados() {
    const dados = await axios.get("http://localhost:5000/recursos");
    setColetando(dados.data);
  };

  //abrir e fechar menu recursos
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const [open4, setOpen4] = React.useState(false);
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const btn = document.querySelector("#Novojogo");
  btn?.addEventListener("click", () => {
    location.reload;
  });
  return (
    <Stack direction={"column"} justifyContent="space-between">
      <AppBar position="static">
        <Stack bgcolor={"darkgray"}>
          <List sx={{ bgcolor: "Black" }}>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Recursos" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ padding: 0 }}>
                  <Stack width={"100%"}>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>
                        Homens-Desempregados:
                      </Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.HomensDesempregados)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>
                        Homens-Empregados:
                      </Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.HomensEmpregados)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight="5%"
                    >
                      <Typography color={"white"}>
                        Mulheres-Desempregados:
                      </Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.MulheresDesempregadas)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>
                        Mulheres-Empregados:
                      </Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Mulheresempregadas)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Madeira:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Madeira)}
                      </Typography>
                    </Box>

                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Grãos:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Grãos)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Carnes:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Carnes)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Frutas:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Frutas)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Raizes:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Raizes)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Polego:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Polego)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      {" "}
                      <Typography color={"white"}>Couro:</Typography>{" "}
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Couro)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Pedra:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Pedra)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Minério-de-ferro:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Minériodeferro)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Barra-de-ferro:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Barradeferro)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      {" "}
                      <Typography color={"white"}>
                        Minério-de-prata:
                      </Typography>{" "}
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Mineriodeprata)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      <Typography color={"white"}>Barra-de-prata:</Typography>
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Barradeprata)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      {" "}
                      <Typography color={"white"}>
                        Minério-de-ouro:
                      </Typography>{" "}
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Mineriodeouro)}
                      </Typography>
                    </Box>
                    <Box
                      justifyContent={"space-between"}
                      display={"flex"}
                      width="auto"
                      marginLeft={"5%"}
                      marginRight={"5%"}
                    >
                      {" "}
                      <Typography color={"white"}>
                        Barra-de-ouro:
                      </Typography>{" "}
                      <Typography color={"white"}>
                        {JSON.stringify(coletado[0]?.Barradeouro)}
                      </Typography>
                    </Box>
                  </Stack>
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ bgcolor: "Black" }}>
            <ListItemButton onClick={handleClick2}>
              <ListItemText primary="Tecnologias" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 0 }}>
                  <Stack></Stack>
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ bgcolor: "Black" }}>
            <ListItemButton onClick={handleClick3}>
              <ListItemText primary="Politicas Sociais" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 0 }}>
                  <Stack></Stack>
                </ListItemButton>
              </List>
            </Collapse>
          </List>

          <List sx={{ bgcolor: "Black" }}>
            <ListItemButton onClick={handleClick4}>
              <ListItemText primary="Diplomacia" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 0 }}>
                  <Stack></Stack>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Stack>
      </AppBar>

      <Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}
