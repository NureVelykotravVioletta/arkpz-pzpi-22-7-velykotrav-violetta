// Код до рефакторингу

function getShippingCost(order) {
  if (order.total > 1000) {
    return 0;
  } else if (order.total > 500) {
    return 10;
  } else {
    return 20;
  }
}

// Код після рефакторингу

function getShippingCost(order) {
  if (isFreeShipping(order)) return 0;
  if (isMediumShipping(order)) return 10;
  return 20;
}

function isFreeShipping(order) {
  return order.total > 1000;
}

function isMediumShipping(order) {
  return order.total > 500;
}
