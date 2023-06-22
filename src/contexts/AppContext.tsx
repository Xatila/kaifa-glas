import { createContext } from "react";
import { CartItemsProps } from "../components/Cart/CartItems";

interface AppContextProps {
  activeProductId: number | null;
  setActiveProductId: React.Dispatch<React.SetStateAction<number | null>>;
  data: CartItemsProps[];
  setData: React.Dispatch<React.SetStateAction<CartItemsProps[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toast: unknown;
}

export const AppContext = createContext<AppContextProps>({
  activeProductId: null,
  setActiveProductId: () => {},
  data: [],
  setData: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  toast: () => {},
});
