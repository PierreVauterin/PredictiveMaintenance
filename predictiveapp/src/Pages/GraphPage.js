/* Classic importations */
import Box from "@mui/material/Box";

/* Own components */
import { Legend } from "../Components/Legend.js";

import { res } from "../Components/ChoiceMenu.js";

/* Main component */
export default function GraphPage() {
  return (
    <>
      <h2>Détails des résultats (modèle: {res[3]})</h2>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ m: 10 }}
      >
        <Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            width="600px"
            height="600px"
            sx={{ backgroundColor: "rgb(255,255,255)" }}
          ></Box>
          <Legend
            message="Matrice des scores des différentes paires de capteurs"
            helpText="Cliquer sur une case de la matrice ouvrira une visualisation du modèle associé"
          />
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            width="600px"
            height="600px"
            sx={{ backgroundColor: "rgb(255,255,255)" }}
          ></Box>
          <Legend
            message="Visualisation du modèle pour la paire PLACEHOLDER"
            helpText="Permet de visualiser la répartition des anomalies"
          />
        </Box>
      </Box>
    </>
  );
}