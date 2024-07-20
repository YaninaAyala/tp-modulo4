import { getData } from "../database";
//import { getDataBis } from "../database"; --> no la usé

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
    return searchedDollar;
  }

  async getByPrecioVenta(venta: number) {
    const dollars = await this.getAllDollars();
    //const searchedPrecioVenta = dollars.find((coin) => console.log(coin.venta));// -->hice pruebas
    const searchedPrecioVenta = dollars.find((coin) => coin.venta == venta)
    //console.log(searchedPrecioVenta); //---> hice pruebas
    return searchedPrecioVenta;
    
  }
}

const dollars = new DollarModel();
// const dollars = new Dollar().getByCasa("cripto"); -->usé para hacer pruebas
// const dollars2 = new Dollar().getByPrecioVenta(944.5);-->usé para hacer pruebas

const {getAllDollars, getByCasa, getByPrecioVenta} = dollars;
export {getAllDollars, getByCasa, getByPrecioVenta}
