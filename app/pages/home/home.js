import { cleanPage } from "../../utils/cleanPage";

export const home = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <section class="home">
  <h1>About Stranger Things</h1>
  <img src="https://as01.epimg.net/meristation/imagenes/2022/06/18/noticias/1655535555_081833_1655535626_noticia_normal_recorte1.jpg" alt="Characters"/>
  <p>Stranger Things is an American science fiction thriller web television series co-produced and distributed by Netflix. 4 Written and directed by brothers Matt and Ross Duffer, and executive produced by Shawn Levy, 5 premiered on the Netflix platform on 15 July 2016. The series received positive reviews from the specialized press, who praised the performance, characterization, rhythm, atmosphere, and the clear homage to 1980s Hollywood, with references to Steven Spielberg films. Wes Craven,7 John Carpenter,8 Stephen King,9 Rob Reiner10 and George Lucas, among others, including several movies, anime and video games.11The story takes place in the fictional town of Hawkins, in the state of Indiana, United States, during the eighties, when a twelve-year-old boy named Will Byers mysteriously disappears. Shortly after, Eleven (Eleven, in Spanish), an apparently fugitive girl with telekinetic powers, meets Mike, Dustin and Lucas, Will's friends, and helps them in their search for Will.through a letter.</p>
  </section>`;
  
};