
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
    section.innerHTML += `<h2>${item.name}</h2>`;
    section.innerHTML += `<p>${item.description}</p>`;
    section.innerHTML += `<img class="imageCharacter" src="${item.image}"width="300px" height="300px"></img>`;
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const character = () => {
  getCharacter();
};