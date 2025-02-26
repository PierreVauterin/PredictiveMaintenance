/* Classic importations */
import Box from "@mui/material/Box";

/* Own components */
import { Legend } from "../Components/Legend.js";
import { res } from "../Components/ChoiceMenu.js";

import matrix from "../Images/matrix.png"
import model from  "../Images/svmModel.png"

/* Main component */
export default function GraphPage() {
  return (
    <>
      <h2>Détails des résultats {res[3]}</h2>
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
          >
            <img src = {matrix} alt = "Matrix" height={600} width={600}/>
          </Box>
          <Legend
            message="Matrice des scores des différentes paires de capteurs"
            helpText="Rien pour le moment"
          />
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            width="600px"
            height="600px"
          >
            <img src = {model} alt = "Model" height={600} width={600}/>
          </Box>
          <Legend
            message="Visualisation du modèle pour la paire PLACEHOLDER"
            helpText="Permet de visualiser la répartition des anomalies"
          />
        </Box>
      </Box>
    </>
  );
}