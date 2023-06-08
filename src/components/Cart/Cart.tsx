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
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItems, { CartItemsProps } from "./CartItems";
import OrderModal from "../Modal/OrderModal";

export interface CartProps {
  productsForCart: CartItemsProps[];
}

export const Cart = ({ productsForCart }: CartProps) => {
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

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClear}>
              Изчисти количката
            </Button>
            <OrderModal data={productsForCart}></OrderModal>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;