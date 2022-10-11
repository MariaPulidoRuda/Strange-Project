
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getCharacter = async () => {
  const character = await getData("character");
  console.log(character)
  printCharacter(character);
};

const printCharacter = (list) => {
  const section = document.createElement("section");
  section.classList.add("character-section");
  for (const item of list) {
    section.innerHTML += `<p>${item.name}</p>`;
    section.innerHTML += `<p>${item.description}</p>`;
    section.innerHTML += `<p>${item.image}</p>`;
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const character = () => {
  getCharacter();
};