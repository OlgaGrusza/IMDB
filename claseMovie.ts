
import { Professional } from "./claseProfessional"
export class Movie
{

// Definicion de atributos
public title:string;
public releaseYear: number;
public actors: Professional[];
public nacionality: string;
public director:Professional;
public writer: Professional;
public language:string;
public plataform:string;
public isMCU:boolean;
public mainCharacterName:string;
public producer:string;
public genre:string;

//Constructor
 constructor (title:string, releaseYear:number, nacionality:string, genre:string) 
 {
    this.title=title;
    this.releaseYear= releaseYear;
    this.actors;
    this.nacionality=nacionality;
    this.director;
    this.writer;
    this.language;
    this.plataform;
    this.isMCU;
    this.mainCharacterName;
    this.producer;
    this.genre= genre;
 }
//Metodos
public setActors(valor: Professional[])
{
    this.actors = valor
} 

public setDirector(valor:Professional)
{
    this.director = valor
} 

public setWriter(valor:Professional)
{
    this.writer  = valor
} 

public setLaunguage(valor:string)
{
     this.language = valor
} 

public setPlataform(valor:string)
{
      this.plataform = valor
} 

public setIsmcu(valor:boolean)
{
     this.isMCU = valor
} 

public setmainCharacterName(valor:string)
{
     this.mainCharacterName = valor
} 

public setProducer(valor :string)
{
      this.producer = valor
} 




   public printAll(): void
    {
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
    }

}
//Main

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
