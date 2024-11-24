// Код до рефакторингу

function calc(cart) {
  let sum = 0;
  for (let item of cart) {
    sum += item.price * item.quantity;
  }
  return sum;
}

// Код після рефакторингу

function calculateCartTotal(cart) {
  let sum = 0;
  for (let item of cart) {
    sum += item.price * item.quantity;
  }
  return sum;
}
