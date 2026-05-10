import "./style.css";
import handleCustomCheckboxInteraction from "./util/custom-checkbox-handling";
import handleCustomRadioButtonInteraction from "./util/custom-radio-button-handling";
import handleCustomSelectInteraction from "./util/custom-select-handling";

document.addEventListener("DOMContentLoaded", handleCustomSelectInteraction);

document.addEventListener(
  "DOMContentLoaded",
  handleCustomRadioButtonInteraction,
);

document.addEventListener("DOMContentLoaded", handleCustomCheckboxInteraction);
