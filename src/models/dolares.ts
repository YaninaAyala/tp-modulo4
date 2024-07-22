import { getData } from "../database";
//import { getDataBis } from "../database"; //--> no la usé
import { Messages } from "../utils/messages";

class DollarModel {
  constructor() {}

  async getAllDollars() {
    const dollars = await getData(""); //---> antes estaba así {dollars} y no me funcionaba getByName
    return dollars;
  }

  async getByCasa(casa: string) {
    const dollars = await this.getAllDollars();
    //const searchedDollar = dollars.find((coin) => console.log(coin.casa)); //-->hice pruebas
    const searchedDollar = dollars.find((coin) => coin.casa == casa);
    //console.log(searchedDollar); //---> hice pruebas
    if (!searchedDollar) {
      return Messages.NOT_FOUND
    }
    return searchedDollar;
  }

  async getByPrecioVenta(venta: number) {
    const dollars = await this.getAllDollars();
    //const searchedPrecioVenta = dollars.find((coin) => console.log(coin.venta));// -->hice pruebas
    const searchedPrecioVenta = dollars.find((coin) => coin.venta == venta)
    //console.log(searchedPrecioVenta); //---> hice pruebas
    if (!searchedPrecioVenta) {
      return Messages.NOT_FOUND
    }
    return searchedPrecioVenta;
  }
}

const dollars = new DollarModel();

//const dollars2 = new DollarModel().getByCasa("bolsa"); //-->usé para hacer pruebas
//const dollars3 = new DollarModel().getByPrecioVenta(944.5);-->usé para hacer pruebas

const {getAllDollars, getByCasa, getByPrecioVenta} = dollars;
export {getAllDollars, getByCasa, getByPrecioVenta}; 
