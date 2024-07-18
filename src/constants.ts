export const API_URL = "https://dolarapi.com/v1/dolares"
export const API_URL_BIS = "https://dolarapi.com/v1/dolares/"

//const API_URL = "https://dolarapi.com/v1/dolares"---> con fetch(API_URL + route) sirve para traer todo el objeto con getData("") pero NO para getData("bolsa") 
//Idem ---> con fetch (API_URL+`/${route}`) NO sirve para traer todo el objeto con getData("") pero si funciona para getData("bolsa")

//const API_URL = "https://dolarapi.com/v1/dolares/" ---> NO sirve para traer objeto completo en ninguna combinación
//Idem ---> sirve para traer getData("bolsa") con ambas combinaciones de fetch(API + .....)