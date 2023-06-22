import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Badge,
  Text,
} from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItems, { CartItemsProps } from "./CartItems";
import OrderModal from "./OrderModal";
import { calculateTotalPrice } from "../Helpers/TotalPrice";

export interface CartProps {
  productsForCart: CartItemsProps[];
  setProductsForCart: React.Dispatch<React.SetStateAction<CartItemsProps[]>>;
}

export const Cart = ({ productsForCart, setProductsForCart }: CartProps) => {
  let totalPrice = useMemo(
    () => calculateTotalPrice(productsForCart),
    [productsForCart]
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const onClear = () => {
    console.log("Cart cleared.");
    productsForCart.length = 0;
    alert("Количката бе изчистена.");
    onClose();
  };
  const getProductsCount = () => {
    return productsForCart.length === 1
      ? "продукт"
      : productsForCart.length === 0
      ? "продукти"
      : "продукта";
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <FaShoppingCart size="20px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Вашата количка</DrawerHeader>

          <DrawerBody>
            {productsForCart.map((p) => (
              <CartItems
                key={p.id}
                id={p.id}
                picture={p.picture}
                heading={p.heading + " Glass"}
                count={p.count}
              />
            ))}
            <Badge>
              {productsForCart.length} {getProductsCount()}
            </Badge>
          </DrawerBody>
          <Text pl={9} fontSize="xl" fontWeight="bold">
            Общо:
            <Badge ml="2" fontSize="0.8em" colorScheme="blue">
              {totalPrice.toFixed(2)} лв
            </Badge>
          </Text>
          <DrawerFooter>
            <Button colorScheme="red" mr={3} onClick={onClear}>
              Изчисти количката
            </Button>
            <OrderModal
              data={productsForCart}
              setData={setProductsForCart}
            ></OrderModal>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
