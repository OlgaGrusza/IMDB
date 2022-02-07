"use strict";
exports.__esModule = true;
var claseProfessional_1 = require("./claseProfessional");
var claseMovie_1 = require("./claseMovie");
var pelicula1 = new claseMovie_1.Movie("Lo que el codigo se llevo", 1982, "española", "thriller");
var actor1 = new claseProfessional_1.Professional("Olga Grusza", 39, "mujer", 50, 180, "rubio", "gris", "caucasica", false, "polaca", 8, "programadora");
var actor2 = new claseProfessional_1.Professional("Pablete Zelda", 31, "hombre", 55, 190, "castaño", "marron", "caucasica", false, "español", 8, "programador");
var actores = [actor1, actor2];
var director1 = new claseProfessional_1.Professional("Jose Herera", 44, "hombre", 70, 180, "castaño", "verde", "caucasica", false, "española", 13, "director");
var escritor1 = new claseProfessional_1.Professional("Ruben Dulce", 28, "hombre", 66, 182, "negro", "marron", "latino", false, "venezolana", 10, "escritor");
pelicula1.setActors(actores);
pelicula1.setDirector(director1);
pelicula1.setWriter(escritor1);
pelicula1.setLaunguage("español");
pelicula1.setPlataform("Netflix");
pelicula1.setIsmcu(false);
pelicula1.setmainCharacterName("Zelda La Loca");
pelicula1.setProducer("Codenotch");
pelicula1.printAll();
