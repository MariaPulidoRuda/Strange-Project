import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getSeaons = async () => {
  const seasons = await getData("seasons");
  console.log(seasons)
  printSeasons(seasons);
};

const printSeasons = (list) => {
  const section = document.createElement("section");
  section.classList.add("seasons-section");
  for (const item of list) {
    section.innerHTML += `<h2>SEASON ${item.season}</h2>`;
    section.innerHTML += `<img class="imgPoster" src="${item.poster}">`;
    section.innerHTML += `<h3>Director: ${item.director}</h3>`;
    section.innerHTML += `<h3>${item.date}</h3>`;
    section.innerHTML += `<h3>${item.chapters} chapters</h3>`;
    section.innerHTML += `<h3>Platform: ${item.platform}</h3>`;
    section.innerHTML += `<p>${item.description}</p>`;
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const seasons = () => {
  getSeaons();
};