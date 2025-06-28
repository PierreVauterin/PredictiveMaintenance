/*
On définit une classe équipement, qui correspond à une case, soit par exemple le ventilateur

Membres: 
color: la couleur à associer à la case (état de l'équipement)
state: la proportion d'anomalies la plus importante (détermine la couleur de l'équipement)
name: le nom de l'équipement
sensors: tableau où chaque élément est de la forme ["capteur",pourcentage], sous-entend qu'une première moyenne a déjà été effectuée

Méthodes:
getPercentages: getter pour les pourcentages de chaque capteur de l'équipement
getSensors: getter pour la liste des capteurs de l'équipement
getColor: getter pour la couleur de l'équipement (en fonction des pourcentages)
getstate: getter pour l'état de l'équipement
printButton: renvoie un message résumant de la situation de l'équipement
*/

import { seuils } from "./Components/Slider.js";

export default class Equipment {
  constructor(name, sensors) {
    this.sensors = sensors;
    this.name = name;
    this.state = Math.max(...this.getPercentages());
    this.color = this.findColor();
  }

  getPercentages() {
    let res = [];
    for (let i = 0; i < this.sensors.length; i++) res.push(this.sensors[i][1]);
    return res;
  }

  getName() {
    return this.name;
  }

  getSensors() {
    let res = [];
    for (let i = 0; i < this.sensors.length; i++) res.push(this.sensors[i][0]);
    return res;
  }

  getstate() {
    return this.state;
  }

  findColor() {
    if (this.getSensors()[0] === "None") return "info";
    else if (0 <= this.state && this.state < seuils[0] / 100) {
      return "success";
    } else if (this.state >= seuils[0] / 100 && this.state < seuils[1] / 100) {
      return "warning";
    } else if (this.state >= seuils[1] / 100 && this.state <= 1) {
      return "error";
    } else
      throw new CheckValues(
        "Problème, valeurs inférieures à 0 ou supérieures à 1"
      );
  }

  printButton() {
    let message = [];
    message.push(`Présentation de l'état de fonctionnement de ${this.name}:`);
    if (this.getSensors()[0] === "None") {
      message.push("Pas de capteurs sur cet équipement, rien à indiquer.");
      return message;
    }
    message.push(`Capteurs présents: ${this.getSensors()}`);
    message.push(`Proportion maximale d'anomalies détectées: ${this.state}`);
    if (this.color === "success") message.push("Bon état");
    else if (this.color === "warning") message.push("Risque potentiel");
    else if (this.color === "error") message.push("Danger");
    else message.push("Pas d'informations");
    return message;
  }
}

/*Et on crée une classe pour les erreurs si jamais les pourcentages de la classe n'en sont pas*/
class CheckValues extends Error {
  /* eslint-disable*/
  constructor(msg) {
    super(msg);
  }
}
