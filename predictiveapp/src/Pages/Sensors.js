import { PieChart } from "@mui/x-charts";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
//import Image from "./Images/Image.js";

/*Own classes*/
import Equipment from "../Equipment.js";

/*Own components*/
import { ButtonDialog } from "../Components/Button";
import { Help } from "../Components/Notification";

/* Global state variable to determine color */
import { seuils } from "../Components/Slider";

export default function Sensors() {
  const countG = countGlobalColors(list); //A voir si c'est la meilleure place/faço
  const countS = CountAllSensorsColors(list);
  return (
    <>
      <h1>Suivi des capteurs</h1>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ m: 8 }}
      >
        <ButtonGroup color="primary" aria-label="outlined primary button group">
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
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <PieChart
          colors={[
            "rgb(46,125,50)",
            "rgb(237,108,2)",
            "rgb(211,47,47)",
            "grey"
          ]}
          series={[
            {
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30 },
              data: [
                { id: 0, value: countG[0], label: "Bon état" },
                { id: 1, value: countG[1], label: "Risque" },
                { id: 2, value: countG[2], label: "Danger" },
                { id: 3, value: countG[3], label: "Pas de données" }
              ]
            }
          ]}
          width={400}
          height={200}
        />
        <PieChart
          colors={["rgb(46,125,50)", "rgb(237,108,2)", "rgb(211,47,47)"]}
          series={[
            {
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30 },
              data: [
                { id: 0, value: countS[0], label: "Bon état" },
                { id: 1, value: countS[1], label: "Risque" },
                { id: 2, value: countS[2], label: "Danger" }
              ]
            }
          ]}
          width={400}
          height={200}
        />
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
