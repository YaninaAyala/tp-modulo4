import { API_URL } from "../constants"
async function getData(route: string) {
    const response = await fetch(API_URL+`/${route}`)
    //const response = await fetch (API_URL + route) //---> Sirve para traer todo el objeto con getData("")
    const data = await response.json();
    //console.log(data); ---> hice pruebas
    return data;
    }
//getData("");---> hice pruebas
export {getData};
//console.log(getData("bolsa")) --> retorna una promesa
