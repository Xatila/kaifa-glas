import { CartItemsProps } from "../components/CartItems";

export const handleMoreInfo = (
  productId: number,
  setActiveProductId: React.Dispatch<React.SetStateAction<number | null>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setActiveProductId(productId);
  setIsModalOpen(true);
};

export const getProductsCount = (productsForCart: CartItemsProps[]) => {
  return productsForCart.length === 1
    ? "продукт"
    : productsForCart.length === 0
    ? "продукти"
    : "продукта";
};
