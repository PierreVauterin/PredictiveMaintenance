/* Classic importations */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

/* Own component */
import ChoiceMenu from "../Components/ChoiceMenu";
import ChooseFile from "../Components/ChooseFile";

/* Main component */
export default function Configuration() {
  return (
    <>
      <h1>Configuration</h1>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ m: 10 }}
      >
        <Box>
          <h2>Choix du modèle durée de vie</h2>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h3>Ici le tableau de performances des modèles</h3>
          </Box>
          <ChoiceMenu
            label="Modèle"
            data={["XGBoost", "Random Forest", "Régression linéaire"]}
            sx={{ color: "white" }}
          />
        </Box>
        <Box>
          <h2>Choix du modèle détection d'anomalies</h2>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h3>Ici le tableau de performances des modèles</h3>
          </Box>
          <ChoiceMenu
            label="Modèle"
            data={[
              "Isolation Forest",
              "Régression logistique",
              "SVM monoclasse"
            ]}
            sx={{ color: "white" }}
          />
        </Box>
        <Box>
          <h2>Choix du dataset</h2>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h3>Veuillez renseigner le chemin d'accès de votre dataset</h3>
          </Box>
          <ChooseFile>
          </ChooseFile>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          color="success"
          onClick={() => console.log("Saisie validée")}
          id="validModelRUL"
        >
          Valider choix des modèles
        </Button>
      </Box>
    </>
  );
}
