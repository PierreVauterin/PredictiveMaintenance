/* Classic importations */
import Box from "@mui/material/Box";

/* Own components */
import { Legend } from "../Components/Legend.js";

import correlation from "../ressources/images/correlation.png"
import model from  "../ressources/images/svmModel.png"

/* Main component */
export default function DataPage() {
  return (
    <>
      <h2>Données du dataset</h2>
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
            <img src = {correlation} alt = "Correlation matrix" height={600} width={600}/>
          </Box>
          <Legend
            message="Matrice de corrélation"
            helpText="Ne sert à rien pour le moment"
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
            message="Extrait des données"
            helpText="Ne sert à rien pour le moment"
          />
        </Box>
      </Box>
    </>
  );
}