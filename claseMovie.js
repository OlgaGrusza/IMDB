"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var claseProfessional_1 = require("./claseProfessional");
var Movie = /** @class */ (function () {
    //Constructor
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.genre = genre;
    }
    //Metodos
    Movie.prototype.setActors = function (valor) {
        this.actors = valor;
    };
    Movie.prototype.setDirector = function (valor) {
        this.director = valor;
    };
    Movie.prototype.setWriter = function (valor) {
        this.writer = valor;
    };
    Movie.prototype.setLaunguage = function (valor) {
        this.language = valor;
    };
    Movie.prototype.setPlataform = function (valor) {
        this.plataform = valor;
    };
    Movie.prototype.setIsmcu = function (valor) {
        this.isMCU = valor;
    };
    Movie.prototype.setmainCharacterName = function (valor) {
        this.mainCharacterName = valor;
    };
    Movie.prototype.setProducer = function (valor) {
        this.producer = valor;
    };
    Movie.prototype.printAll = function () {
        console.log(this.title);
        console.log(this.releaseYear);
        console.log(this.actors);
        console.log(this.nacionality);
        console.log(this.director);
        console.log(this.writer);
        console.log(this.language);
        console.log(this.plataform);
        console.log(this.isMCU);
        console.log(this.mainCharacterName);
        console.log(this.producer);
        console.log(this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
//Main
var pelicula1 = new Movie("Lo que el codigo se llevo", 1982, "española", "thriller");
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
