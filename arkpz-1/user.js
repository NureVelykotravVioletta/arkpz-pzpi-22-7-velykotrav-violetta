import { DISCOUNT_RATE } from "./constants.js";

export class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  calculateDiscount(total) {
    return total * DISCOUNT_RATE;
  }
}
