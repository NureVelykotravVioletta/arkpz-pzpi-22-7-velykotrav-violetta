import { fetchUsers, calculateTotalWithDiscount } from "./utils.js";

(async function main() {
  console.log("Fetching users...");
  const users = await fetchUsers();

  if (users.length === 0) {
    console.warn("No users available to display.");
    return;
  }

  // Виведення привітань від користувачів
  users.forEach((user) => {
    console.log(user.greet());
  });

  // Обробка масиву цін
  const prices = [100, 200, 300];
  const total = calculateTotalWithDiscount(prices);
  console.log(`Total after discount: $${total.toFixed(2)}`);
})();
