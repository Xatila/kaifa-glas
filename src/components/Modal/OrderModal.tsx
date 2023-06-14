import "firebase/compat/firestore";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import MyForm from "../../services/MyForm";
import { CartItemsProps } from "../Cart/CartItems";

interface Props {
  data: CartItemsProps[];
  setData: React.Dispatch<React.SetStateAction<CartItemsProps[]>>;
}
const OrderModal = ({ data, setData }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button
        colorScheme={!!data.length ? "green" : "gray"}
        onClick={() => !!data.length && onOpen()}
      >
        Купи
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Информация за поръчка</ModalHeader>
          <MyForm cartItems={data} setCartItems={setData}></MyForm>
          <ModalFooter>
            <Button onClick={onClose}>Затвори</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default OrderModal;
