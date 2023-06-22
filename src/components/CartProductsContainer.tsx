import CartItems, { CartItemsProps } from "./CartItems";

interface Props {
  productsForCart: CartItemsProps[];
}

const CartProductsContainer = ({ productsForCart }: Props) => {
  return (
    <>
      {productsForCart.map((p) => (
        <CartItems
          key={p.id}
          id={p.id}
          picture={p.picture}
          heading={p.heading + " Glass"}
          count={p.count}
        />
      ))}
    </>
  );
};

export default CartProductsContainer;
