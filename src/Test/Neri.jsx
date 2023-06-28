import { useContext } from "react";
import submitOfNext from "../Functions/submitOfNext";
import { DataContext } from "../Context/MainContext";

export default function Neri() {
  const context = useContext(DataContext);
  submitOfNext(context);
  return null;
}
