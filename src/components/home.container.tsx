import React from "react";

import { getDatas } from "@/api/api.datas";
import { Datas } from "@/api/api.models";
import { ElectricityConsumptionGraph } from "./electricity-consumption-graph";
import * as classes from "./style/style.component";
import { ElectricityConsumptionPercentGraphic } from "./electricity-consumption-percent-graphic";

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
    <>
      <section className={classes.section1}>
        <ElectricityConsumptionGraph allData={datas} />
      </section>
      <section className={classes.section2}>
        <ElectricityConsumptionPercentGraphic allData={datas} />
      </section>
    </>
  );
};
