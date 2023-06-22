import {
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | undefined;
  onAddToCart: (
    id: number,
    image: string,
    title: string,
    count: number
  ) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const isMobile = useIsMobile();

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product)
      onAddToCart(product?.id, product?.image, product?.title, quantity);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent
        style={{
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
          height: "100%",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <ModalHeader>{product?.title}</ModalHeader>
        <ModalBody>
          <div className="row">
            <div
              className="col-md-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {product?.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{
                    maxWidth: "150px",
                  }}
                />
              )}
            </div>
            <div className="col-md-6" style={{ padding: 25, fontSize: 18 }}>
              {product?.description && (
                <p
                  style={{
                    padding: "8px",
                    ...(isMobile && { maxHeight: 130 }),
                    overflow: "auto",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  {product.description}
                </p>
              )}
              <p className="product-price">Цена: {7.99} лв.</p>

              <HStack style={{ padding: 10 }}>
                <Button
                  className="btn-quantity"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </Button>
                <span className="quantity">{quantity}</span>
                <Button
                  className="btn-quantity"
                  onClick={handleIncreaseQuantity}
                >
                  +
                </Button>
              </HStack>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleAddToCart}>
            Купи
          </Button>
          <Button variant="outline" onClick={onClose}>
            Затвори
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetails;
