import { Professional } from "./claseProfessional"
import { Movie } from  "./claseMovie"



let pelicula1:Movie = new Movie("Lo que el codigo se llevo", 1982, "española","thriller");
let actor1:Professional = new Professional("Olga Grusza",39, "mujer",50, 180, "rubio", "gris","caucasica",false, "polaca", 8, "programadora")
let actor2:Professional = new Professional("Pablete Zelda", 31,"hombre", 55, 190, "castaño", "marron", "caucasica", false, "español", 8,"programador")
let actores : Professional[] = [actor1, actor2]
let director1:Professional = new Professional ("Jose Herera", 44, "hombre", 70,180, "castaño", "verde","caucasica",false,"española", 13, "director")
let escritor1:Professional =new Professional ("Ruben Dulce", 28,"hombre", 66, 182, "negro", "marron", "latino", false, "venezolana", 10, "escritor")
pelicula1.setActors(actores)
pelicula1.setDirector(director1)
pelicula1.setWriter(escritor1)
pelicula1.setLaunguage("español")
pelicula1.setPlataform("Netflix")
pelicula1.setIsmcu(false)
pelicula1.setmainCharacterName("Zelda La Loca")
pelicula1.setProducer("Codenotch")

pelicula1.printAll();