import { CartItemsProps } from "../components/CartItems";

export const calculateTotalPrice = (cartItems: CartItemsProps[]) => {
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice += item.count * 7.99;
  });

  return totalPrice;
};
