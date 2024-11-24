// Код до рефакторингу

function calculateOrder(cartItems) {
  let total = 0;

  for (let item of cartItems) {
    total += item.price * item.quantity;

    if (item.category === "electronics") {
      console.log(`Applying electronics discount for ${item.name}`);
      total -= item.price * 0.1;
    }
  }

  console.log(`Total order price: ${total}`);
  return total;
}

// Код після рефакторингу

function calculateOrder(cartItems) {
  let total = 0;

  for (let item of cartItems) {
    total += calculateItemPrice(item);
    logDiscount(item);
  }

  console.log(`Total order price: ${total}`);
  return total;
}

function calculateItemPrice(item) {
  let price = item.price * item.quantity;
  if (item.category === "electronics") {
    price -= item.price * 0.1;
  }
  return price;
}

function logDiscount(item) {
  if (item.category === "electronics") {
    console.log(`Applying electronics discount for ${item.name}`);
  }
}
