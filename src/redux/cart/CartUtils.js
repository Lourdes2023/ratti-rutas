export const addItemToCart = (cartItems, products) => {
  const ProductItemsCart = cartItems.find((item) => {
    return item.id === products.id;
  });

  if (ProductItemsCart) {
    //si hay producto en carrito hago algoR

    return cartItems.map((item) => {
      return item.id === ProductItemsCart.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item;
    });
  } else {
    // sino hago otra cosa
    return [
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ];
  }
};

export const removeItemFromCart = (cartItems, id) => {
  const productToRemove = cartItems.find((item) => item.id === id);

  if (productToRemove.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === productToRemove.id
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item;
    });
  } else {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
};
