export const addItemToCart = (cart, cartItem) => {
  const existCartItem = cart.find(item => item.id === cartItem.id);

  if (existCartItem) {
    return cart.map(item => {
      if (item.id === cartItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item;
    })
  }

  return [
    ...cart,
    {
      ...cartItem,
      quantity: 1
    }
  ]
};

export const substractItemCart = (cart, cartItem) => {
  const existCartItem = cart.find(item => item.id === cartItem.id);

  if (existCartItem && existCartItem.quantity > 1) {
    return cart.map(item => {
      if (item.id === cartItem.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })
  }

  return [
    ...cart,
  ]
};