import { Button } from "@mui/material";
import axios from "axios";
import { testedapuxada } from "./NavBarInfor";

interface IDados {
  ID: string;
  FamiliasDesempregadas: number;
  HomensEmpregados: number;
  HomensDesempregados: number;
  Mulheresempregadas: number;
  MulheresDesempregadas: number;
  CriançasDesempregadas: number;
  Comida: number;
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

export default async function Novojogo() {
  const novoDado = {
    HomensEmpregados: 0,
    HomensDesempregados: 5,
    Mulheresempregadas: 0,
    MulheresDesempregadas: 5,
    CriançasDesempregadas: 0,
    Grãos: 0,
    Carnes: 0,
    Frutas: 100,
    Raizes: 0,
    Polego: 0,
    Couro: 0,
    Madeira: 100,
    Pedra: 0,
    Minériodeferro: 0,
    Barradeferro: 0,
    Mineriodeprata: 0,
    Barradeprata: 0,
    Mineriodeouro: 0,
    Barradeouro: 0,
  };
  const id = 0;

  await axios.put(`http://localhost:5000/recursos/${id}`, novoDado);

  testedapuxada();
}
