import Chart from "react-apexcharts";
import React from "react";
import { Datas } from "@/api/api.models";
interface Props {
  allData: Datas;
}
export const ElectricityConsumptionGraph = (props: Props) => {
  const { allData } = props;
  console.log(allData);
  const { included, data } = allData;
  console.log(included);
  const arrayValues = included[0]?.attributes?.content[0]?.attributes;
  const categories = arrayValues?.values.map((value) => {
    const date = new Date(value.datetime);
    return date.getDate();
  });
  const dataSeries = arrayValues?.values.map((arrayValue) =>
    Math.round(arrayValue.value)
  );
  const config = {
    options: {
      chart: {
        id: included[0]?.id || "",
      },
      xaxis: {
        categories: categories || [],
      },
    },
    series: [
      {
        name: "series-1",
        data: dataSeries || [],
      },
    ],
  };

  return (
    <>
      <h1>
        En esta Gráfica representamos el consumo de energía {arrayValues?.title}
      </h1>

      <Chart
        options={config.options}
        series={config.series}
        type="line"
        width={1000}
        height={320}
      />
    </>
  );
};
