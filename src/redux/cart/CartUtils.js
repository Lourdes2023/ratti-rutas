export const addItemToCart = (cartItems, product) => {
  const itemExists = cartItems.find((item) => item.id === product.id);

  return itemExists
    ? cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...cartItems, { ...product, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, id) => {
  const itemToRemove = cartItems.find((item) => item.id === id);

  return itemToRemove
    ? cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    : cartItems;
};
