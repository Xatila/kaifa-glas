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
import { CartItemsProps } from "./CartItems";
import OrderModal from "./OrderModal";
import { calculateTotalPrice } from "../Helpers/TotalPrice";
import { getProductsCount } from "../Helpers/ProductsHelper";
import CartProductsContainer from "./CartProductsContainer";

export interface CartProps {
  productsForCart: CartItemsProps[];
  setProductsForCart: React.Dispatch<React.SetStateAction<CartItemsProps[]>>;
}

export const Cart = ({ productsForCart, setProductsForCart }: CartProps) => {
  const productsCount = useMemo(
    () => getProductsCount(productsForCart),
    [productsForCart.length]
  );

  const productsCountInfo = `${productsForCart.length} ${productsCount}`;
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
            <CartProductsContainer productsForCart={productsForCart} />
            <Badge>{productsCountInfo}</Badge>
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
