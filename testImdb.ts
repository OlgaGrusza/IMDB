import { Professional } from "./claseProfessional"
import { Movie } from  "./claseMovie"
import { Imdb } from "./claseImdb"


let imdb1:Imdb = new Imdb([])
let pelicula2:Movie = new Movie("Haz bien los setters",2022, "española", "drama")
let actor3:Professional = new Professional("Miguelon Rubio", 27, "hombre", 78,190, "rubio", "verde","caucasico", false, "venezolana", 6, "actor")
let escritor2:Professional = new Professional ("Menchu Guapa",37, "mujer", 50, 170, "castaño","marron", "caucasica", false, "española", 9,"escritor")
let director2:Professional = new Professional ("Alonso Feliz", 38, "hombre", 80,183, "negro","marron", "caucasica", false,"español", 5, "director")
let actor1:Professional = new Professional("Olga Grusza",39, "mujer",50, 180, "rubio", "gris","caucasica",false, "polaca", 8, "programadora")
let actor2:Professional = new Professional("Pablete Zelda", 31,"hombre", 55, 190, "castaño", "marron", "caucasica", false, "español", 8,"programador")

let actores : Professional[] = [actor1, actor2, actor3]

pelicula2.setActors(actores)
pelicula2.setDirector(director2)
pelicula2.setWriter(escritor2)
pelicula2.setDirector(director2)

console.log(imdb1)


