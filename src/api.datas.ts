import axios from "axios";

export const getDatas = () => {
  return axios
    .get(
      "https://apidatos.ree.es/es/datos/balance/balance-electrico?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=day"
    )
    .then((data) => {
      data;
      if (data.status === 200) {
        return data;
      } else {
        return [];
      }
    });
};
