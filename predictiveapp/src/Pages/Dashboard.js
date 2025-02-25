/* Classic importations */
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

/* Own components */
import { Help } from "../Components/Notification.js";
import ChoiceMenu from "../Components/ChoiceMenu";
import { Chart } from "../Components/Chart";
var sensorList = ["s1", "s2", "s3", "s8", "s12"];

/* Main component */
export default function Dashboard() {
  const [sensorChoice, setSensorChoice] = useState("s1");
  const [data, setData] = useState([]);
  const keyList = [];
  useEffect(() => {
    const newData = [];
    for (let i = 0; i < 50; i++) {
      newData.push({
        Observation: i + 1,
        Value: (Math.random() * 10 + 10).toFixed(2)
      });
    }
    setData(newData);
  }, []);

  function updateSensor(value) {
    setSensorChoice(value);
  }

  return (
    <>
      <h2>Tableau de bord</h2>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box sx={{ m: 10 }}>
          <h3>Nombre d'observations recueillies</h3>
          <h3>30</h3>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <h3>Durée avant prochaine observation</h3>
          <h3>3 heures</h3>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <h3>Durée entre observations</h3>
          <h3>5h</h3>
        </Box>
        <Box>
          <h3>Temps écoulé depuis le début de suivi</h3>
          <h3>72 heures</h3>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <h3>État du système</h3>
          <h3>Usure légère</h3>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <h3>Nombre de capteurs utilisés</h3>
          <h3>{sensorList.length}</h3>
        </Box>
        <Box sx={{ m: 10 }}>
          <Chart
            XLabel="Observations"
            YLabel={sensorChoice}
            data={data}
            keyList={keyList}
            main={"Value"}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Help helpText="Visualiser le diagramme montrant l'évolution des valeurs du capteur en fonction de l'usure" />
          </Box>
          <ChoiceMenu
            label="Capteur"
            data={sensorList}
            id={1}
            sx={{ color: "white" }}
            update={updateSensor}
          />
        </Box>
      </Box>
    </>
  );
}