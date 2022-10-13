import './style.css'

import { Nav } from "./components/Nav/Nav";
import { home } from "./pages/home/home";
import { seasons } from "./pages/seasons/seaons";
import { character } from "./pages/character/character";
import { linkPage } from "./utils/linkPage";

const header = document.querySelector("header");
header.innerHTML = Nav();

//home se quedaría aquí porque quiero que sea lo primero que se vea cuando se entra en la página.
 home ();
 
 linkPage("#homelink", home);
 linkPage("#seasonslink", seasons);
 linkPage("#characterlink", character);