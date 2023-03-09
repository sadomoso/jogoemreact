import { Typography, AppBar, Stack, Button, colors } from "@mui/material";
import Novojogo from "./ButtonNovoJogo";

export default function NavBarTitulo() {
  return (
    <AppBar position="static">
      <Stack
        bgcolor={"black"}
        direction={"row"}
        justifyContent="space-between"
        border="dashed"
        borderColor={"white"}
      >
        <Button id="Novojogo" variant="text" color="warning" onClick={Novojogo}>
          Novo Jogo
        </Button>
        <Button variant="text" color="warning">
          Carregar
        </Button>
        <Button variant="text" color="warning">
          Salvar
        </Button>
        <Button variant="text" color="warning">
          Opções
        </Button>
        <Button variant="text" color="warning">
          Tutorial
        </Button>
      </Stack>
    </AppBar>
  );
}
