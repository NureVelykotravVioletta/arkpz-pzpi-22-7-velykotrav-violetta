import { DISCOUNT_RATE } from "./constants.js";
import { User } from "./user.js";

/**
 * Імітація API для отримання даних користувачів
 * @returns {Promise<User[]>} Масив користувачів
 */
export async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
      ];
      resolve(mockData.map((user) => new User(user.id, user.name, user.age)));
    }, 1000);
  });
}

/**
 * Розрахунок загальної суми після знижки
 * @param {number[]} prices Масив цін
 * @returns {number} Сума після знижки
 */
export function calculateTotalWithDiscount(prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);
  const discount = total * DISCOUNT_RATE;
  return total - discount;
}
