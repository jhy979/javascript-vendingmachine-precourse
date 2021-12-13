import { COIN } from "../utils/constants.js";

export default class VendingMachine {
  constructor() {
    this.productList = [];
    this.ownChange = new Array(COIN.length).fill(0);
    this.userMoney = 0;
    this.returnMoney = 0;
  }

  addProduct(name, price, quantity) {
    const isInclude = this.productList.some((product) => product.name === name);
    if (!isInclude) {
      this.productList.push({ name, price, quantity });
      return;
    }
    this.productList.map((product) => {
      if (product.name === name) {
        product.price = price;
        product.quantity += quantity;
        return false;
      }
    });
  }

  makeRandomChange(charged) {
    let zero = charged;
    COIN.map((coin, idx) => {
      if (zero / coin > 0) {
        const randomQuantity = MissionUtils.Random.pickNumberInRange(
          0,
          parseInt(zero / coin, 10)
        );
        zero -= randomQuantity * coin;
        this.ownChange[idx] += randomQuantity;
      }
    });
    this.ownChange[COIN.length - 1] += zero / 10;
  }
}
