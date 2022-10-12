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
    section.innerHTML += `<p>${item.season} - Season</p>`;
    section.innerHTML += `<p>${item.director}</p>`;
    section.innerHTML += `<p>${item.date}</p>`;
    section.innerHTML += `<p>${item.chapters} - Chapter</p>`;
    section.innerHTML += `<p>${item.platform}</p>`;
    section.innerHTML += `<p>${item.description}</p>`;
    section.innerHTML += `<img class="imgPoster" src="${item.poster}"></img>`;
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const seasons = () => {
  getSeaons();
};