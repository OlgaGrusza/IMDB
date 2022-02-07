"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    //Constructor
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    //Metodos
    Professional.prototype.printAll = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.genre);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.hairColor);
        console.log(this.eyeColor);
        console.log(this.race);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
//Main
