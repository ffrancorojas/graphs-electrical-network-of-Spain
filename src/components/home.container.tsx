import { getDatas } from "@/api.datas";
import React from "react";

export const HomeContainer: React.FC = () => {
  getDatas().then((data) => console.log(data));
  return <div>Estamos en el contenedor</div>;
};
