/* Classic importations */
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

/* Own components */
import { Help } from "../Components/Notification.js";
import { Chart } from "../Components/Chart";

import { res } from "../Components/ChoiceMenu.js";

/* Main component */
/*
Faire la mise en page
*/
export default function Rul() {
  const [data, setData] = useState([]);
  const keyList = ["Legacy"];
  useEffect(() => {
    const newData = [];
    let base1 = 100;
    let base2 = 100;
    for (let i = 0; i < 20; i++) {
      newData.push({
        Observation: i + 1,
        Monitored: base1.toFixed(2),
        Legacy: base2.toFixed(2)
      });
      base1 = base1 - i * Math.random();
      base2 = base2 - i * Math.random();
    }
    setData(newData);
  }, []);

  return (
    <>
      <h2>Durée de vie (modèle: {res[2]})</h2>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box sx={{ m: 10 }}>
          <h3>Durée de vie restante estimée au cycle X</h3>
          <h3>120 cycles</h3>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <h3>Durée de vie restante estimée X cycles précédemment</h3>
          <h3>200 cycles</h3>
        </Box>
        <Box>
          <h3>Durée de vie estimée initialement</h3>
          <h3>800 cycles</h3>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <h3>Durée de vie empirique</h3>
          <h3>400 cycles</h3>
        </Box>
        <Box sx={{ m: 10 }}>
          <Chart
            XLabel="Observations"
            YLabel="Indice de santé"
            data={data}
            keyList={keyList}
            main={"Monitored"}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Help helpText="Visualiser la durée de vie du système par rapport à des systèmes similaires" />
          </Box>
        </Box>
      </Box>
    </>
  );
}