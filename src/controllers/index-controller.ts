import { getAllDollars, getByCasa, getByPrecioVenta } from "../models/dolares";
import { Messages } from "../utils/messages";

class DollarController {
  async getAllDollars() {
    return await getAllDollars();
  }
  async getByCasa(casa: string) {
    if (!casa) {
      return Messages.MISSING_DATA;
    } else if (typeof casa != "string") {
      return Messages.BAD_REQUEST;
    }
    return await getByCasa(casa);
  }
  async getByPrecioVenta(venta: number) { 
    if (!venta) {
      return Messages.MISSING_DATA;
    } else if (typeof venta != "number") {
      return Messages.BAD_REQUEST
    }
    return await getByPrecioVenta(venta) 
  }
}

const dollars = new DollarController();

const {
  getAllDollars: allDollars,
  getByCasa: casaDollar,
  getByPrecioVenta: ventaDollar,
} = dollars;

export { allDollars, casaDollar, ventaDollar };
