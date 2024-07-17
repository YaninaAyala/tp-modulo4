import { API_URL } from "../constants"
async function getData() {
    const response = await fetch (API_URL)
    const data = await response.json();
    console.log(data);
    return data;
    }
getData();
//console.log(getData())
