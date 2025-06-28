import { PieChart } from "@mui/x-charts";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useState } from "react";
//import Image from "./Images/Image.js";

/*Own classes*/
import Equipment from "../Equipment.js";

/*Own components*/
import { ButtonDialog } from "../Components/Button";
import { Help } from "../Components/Notification";
import { SettingsDrawer } from "../Components/Drawer";

/* Global state variable to determine color */
import { seuils } from "../Components/Slider";
import { res } from "../Components/ChoiceMenu";

/* Main component */
export default function Sensors() {
  const [seuil, setSeuil] = useState([20, 40]);
  let memory = { sensors: true, camembert: true };
  const [Hidden, setHidden] = useState(memory);

  /*
  Function to pass as prop in order to update the visibility status
  component: either "sensors" or "charts" (for the moment) 
  */
  function updateHide(event) {
    setHidden({
      ...Hidden,
      [event.target.name]: event.target.checked
    });
  }

  function onChange(value) {
    setSeuil(value);
  }
  const countG = countGlobalColors(list); //A voir si c'est la meilleure place/faço
  const countS = CountAllSensorsColors(list);
  return (
    <>
      <h2>Suivi des capteurs {res[2]}</h2>
      <Box display="flex" alignItems="center" justifyContent="center">
        <SettingsDrawer
          onChange={onChange}
          value={seuil}
          update={updateHide}
          state={Hidden}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ m: 6 }}
      >
        {Hidden["sensors"] ? (
          <>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              id="GroupOfButtons"
            >
              <ButtonDialog equipment={list[0]} />
              <ButtonDialog equipment={list[1]} />
              <ButtonDialog equipment={list[2]} />
              <ButtonDialog equipment={list[3]} />
              <ButtonDialog equipment={list[4]} />
              <ButtonDialog equipment={list[5]} />
              <ButtonDialog equipment={list[6]} />
              <ButtonDialog equipment={list[7]} />
              <ButtonDialog equipment={list[8]} />
              <ButtonDialog equipment={list[9]} />
              <ButtonDialog equipment={list[10]} />
              <ButtonDialog equipment={list[11]} />
              <ButtonDialog equipment={list[12]} />
            </ButtonGroup>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Help helpText="Cliquer sur un composant vous fournira les informations sur les capteurs qui y sont intégrés" />
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
      {Hidden["camembert"] ? (
        <>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box>
              <h3>État des équipements</h3>
              <PieChart
                colors={[
                  "rgb(46,125,50)",
                  "rgb(237,108,2)",
                  "rgb(211,47,47)",
                  "rgb(2,136,209)"
                ]}
                series={[
                  {
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30 },
                    data: [
                      { id: 0, value: countG[0] },
                      { id: 1, value: countG[1] },
                      { id: 2, value: countG[2] },
                      { id: 3, value: countG[3] }
                    ]
                  }
                ]}
                width={300}
                height={200}
              />
            </Box>
            <Box>
              <h3>État des capteurs</h3>
              <PieChart
                colors={["rgb(46,125,50)", "rgb(237,108,2)", "rgb(211,47,47)"]}
                series={[
                  {
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30 },
                    data: [
                      { id: 0, value: countS[0] },
                      { id: 1, value: countS[1] },
                      { id: 2, value: countS[2] }
                    ]
                  }
                ]}
                width={300}
                height={200}
                id="ChartSensors"
              />
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
      <Box display="flex" justifyContent="center">
        <h3>Pourcentages d'anomalies</h3>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(2,136,209)", m: 1 }}
              ></Box>
              <Typography>Pas de données</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(46,125,50)", m: 1 }}
              ></Box>
              <Typography>0%-{seuils[0]}%</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(237,108,2)", m: 1 }}
              ></Box>
              <Typography>
                {seuils[0]}%-{seuils[1]}%
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Box
                width="30px"
                height="30px"
                sx={{ backgroundColor: "rgb(211,47,47)", m: 1 }}
              ></Box>
              <Typography>{seuils[1]}%-100%</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
/* Ne sera pas conservé avec le code Python */
const Ambient = new Equipment("Ambient", [["None", 0]]);
const Inlet = new Equipment("Inlet", [["None", 0]]);
const Splitter = new Equipment("Splitter", [["None", 0]]);
const Fan = new Equipment("Fan", [
  ["s1", 0.9],
  ["s5", 0.1]
]);
const BypassPath = new Equipment("BypassPath", [
  ["s6", 0.12],
  ["s15", 0.1]
]);
const BypassNozzle = new Equipment("BypassNozzle", [["None", 0]]);
const LPC = new Equipment("LPC", [["s2", 0.23]]);
const HPC = new Equipment("HPC", [
  ["s3", 0.2],
  ["s7", 0.4],
  ["s11", 0.1]
]);
const Fuel = new Equipment("Fuel", [["s12", 0.54]]);
const Burner = new Equipment("Burner", [["s16", 0.99]]);
const HPT = new Equipment("HPT", [["s20", 0.47]]);
const LPT = new Equipment("LPT", [
  ["s4", 0.3],
  ["s21", 0.251]
]);
const CoreNozzle = new Equipment("CoreNozzle", [
  ["s9", 0.55],
  ["s14", 0.124]
]);

const list = [
  Ambient,
  Inlet,
  Fan,
  Splitter,
  BypassPath,
  BypassNozzle,
  LPC,
  HPC,
  Fuel,
  Burner,
  HPT,
  LPT,
  CoreNozzle
];

function findSensorColor(sensor) {
  if (0 < sensor && sensor < 0.2) {
    return "success";
  } else if (sensor >= seuils[0] / 100 && sensor < seuils[1] / 100) {
    return "warning";
  } else if (sensor >= seuils[1] / 100 && sensor <= 1) {
    return "error";
  }
  return "none";
}

function countGlobalColors(list) {
  let count = [0, 0, 0, 0]; //Green Orange Red None
  for (let i = 0; i < list.length; i++) {
    switch (list[i].findColor()) {
      case "success":
        count[0] += 1;
        break;
      case "warning":
        count[1] += 1;
        break;
      case "error":
        count[2] += 1;
        break;
      case "info":
        count[3] += 1;
        break;
      default:
        console.log("Rien ici");
        break;
    }
  }
  return count;
}

function CountAllSensorsColors(list) {
  let count = [0, 0, 0]; //Green Orange Red
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].getPercentages().length; j++) {
      if (list[i].getPercentages().length === 0) {
        continue;
      }
      const color = findSensorColor(list[i].getPercentages()[j]);
      switch (color) {
        case "success":
          count[0] += 1;
          break;
        case "warning":
          count[1] += 1;
          break;
        case "error":
          count[2] += 1;
          break;
        default:
          //console.log("Rien ici");
          break;
      }
    }
  }
  return count;
}
