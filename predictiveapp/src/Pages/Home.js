/* Classic importations */
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

/* Own components */
import { Help } from "../Components/Notification";
import ChoiceMenu from "../Components/ChoiceMenu.tsx"

/* Main component */
/* Une horreur, à voir si on passe ça en component ou si on peut mieux gérer les Box */
export default function Home() {
  return (
    <>
      <h1>Tableau de bord</h1>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box sx={{ m: 10 }}>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>Temps écoulé depuis le début de suivi</h2>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>72 heures</h2>
          </Box>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>État du système</h2>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>Aucune idée</h2>
          </Box>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>Nombre d'observations recueillies</h2>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>30</h2>
          </Box>
          <Divider sx={{ borderBottomWidth: 5 }} />
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>Durée avant prochaine observation</h2>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>3 heures</h2>
          </Box>
          <Divider sx={{ borderBottomWidth: 5 }} />
        </Box>
        <Box sx={{ m: 10 }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <h2>Plot des graphes cycles/capteurs</h2>
          </Box>
          <Box
            width="700px"
            height="450px"
            sx={{ backgroundColor: "rgb(255,255,255)" }}
          ></Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Help helpText="Visualiser le diagramme montrant l'évolution des valeurs du capteur en fonction de l'usure" />
          </Box>
          <ChoiceMenu label="Capteur" data={["s1", "s2", "s3"]} />
        </Box>
      </Box>
    </>
  );
}
