import { getDatas } from "@/api/api.datas";
import { Datas } from "@/api/api.models";
import React from "react";
import { Graphics } from "./apex-charts";

export const HomeContainer: React.FC = () => {
  const [datas, setDatas] = React.useState<Datas>({
    data: {
      attributes: {
        description: "",
        "last-update": "",
        title: "",
      },

      id: "",
      meta: [],
      type: "",
    },
    included: [],
  });
  React.useEffect(() => {
    getDatas().then((data) => {
      setDatas(data);
    });
  }, []);
  return (
    <div>
      <Graphics allData={datas} />
    </div>
  );
};
