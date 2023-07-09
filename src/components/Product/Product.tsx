import { Badge } from "react-bootstrap";
import "./Product.css";
import { useToast } from "@chakra-ui/react";

interface ProductParts {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  activeProductId: number | null;
  onMoreInfo: (id: number) => void;
  onAddToCart: (
    id: number,
    image: string,
    title: string,
    count: number
  ) => void;
}

const Product = ({
  id,
  image,
  title,
  price,
  activeProductId,
  onMoreInfo,
  onAddToCart,
}: ProductParts) => {
  const handleMoreInfoClick = () => {
    onMoreInfo(id);
  };
  const toast = useToast();
  const isActiveProduct = id === activeProductId;

  return (
    <>
      <div className={`product ${isActiveProduct ? "active" : ""}`}>
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-content">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">
            <Badge pill>{price} лв.</Badge>
          </p>
          <div className="product-buttons">
            <button className="btn-more-info" onClick={handleMoreInfoClick}>
              Повече информация
            </button>
            <button
              className="btn-add-to-cart"
              onClick={() => {
                onAddToCart(id, image, title, 1);
                toast({
                  title: "Стъклен протектор за " + title,
                  description: "Беше успешно добавен в количката",
                  status: "success",
                  duration: 1900,
                  isClosable: true,
                });
              }}
            >
              Купи
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
