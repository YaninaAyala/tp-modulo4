import { API_URL } from "../constants"
import { API_URL_BIS } from "../constants";

async function getData(route: string) {
    const response = await fetch (API_URL + route) //---> Sirve para traer todo el objeto con getData("")
    const data = await response.json();
    //console.log(data); //---> hice pruebas
    return data;
    }
//getData("") //---> hice pruebas

async function getDataBis(route: string) {
    const response = await fetch(API_URL_BIS+`/${route}`) //---> sirve para traer getData("bolsa")
    const data = await response.json();
    //console.log(data); //---> hice pruebas
    return data;
}
//getDataBis("bolsa") //---> hice pruebas

export {getData, getDataBis};

//console.log(getData("bolsa")) --> retorna una promesa
