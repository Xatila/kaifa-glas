import { useContext } from "react";
import FreeDelivery from "./FreeDelivery";
import Product from "./Product/Product";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products";
import { AppContext } from "../contexts/AppContext";
import { handleMoreInfo } from "../Helpers/ProductsHelper";

const ProductsContainer = () => {
  const {
    activeProductId,
    setActiveProductId,
    isModalOpen,
    setIsModalOpen,
    data,
    setData,
  } = useContext(AppContext);

  const handleAddToCart = (
    productId: number,
    productImage: string,
    productHeading: string,
    productCount: number
  ) => {
    const existingItemIndex = data.findIndex((item) => item.id === productId);
    if (existingItemIndex !== -1) {
      const updatedData = [...data];
      updatedData[existingItemIndex].count += productCount;
      setData(updatedData);
    } else {
      const newItem = {
        id: productId,
        heading: productHeading,
        picture: productImage,
        count: productCount,
      };
      setData([...data, newItem]);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <FreeDelivery />
      <div className="product-container">
        {Products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            activeProductId={activeProductId || null}
            onMoreInfo={() =>
              handleMoreInfo(product.id, setActiveProductId, setIsModalOpen)
            }
            onAddToCart={handleAddToCart}
            price={7.99}
          />
        ))}
      </div>
      {activeProductId && (
        <ProductDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={Products.find((product) => product.id === activeProductId)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default ProductsContainer;
