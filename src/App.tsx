import { useEffect, useState } from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Product from "./components/Product/Product";
import Products from "../src/components/Products";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HStack, Box, useToast, ChakraProvider } from "@chakra-ui/react";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import FreeDelivery from "./components/FreeDelivery";
import "bootstrap/dist/css/bootstrap.css";
import { CartItemsProps } from "./components/Cart/CartItems";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [data, setData] = useState<CartItemsProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const handleMoreInfo = (productId: number) => {
    setActiveProductId(productId);
    setIsModalOpen(true);
  };

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
    toast({
      title: "Стъклен протектор за " + productHeading,
      description: "Беше успешно добавен в количката",
      status: "success",
      duration: 2800,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <BrowserRouter>
        <CustomNavbar></CustomNavbar>

        <div>
          <HStack
            justify="flex-end"
            position="fixed"
            top="20"
            right="7"
            zIndex="999"
          >
            <Box>
              <Cart productsForCart={data} setProductsForCart={setData} />
            </Box>
          </HStack>
          <Routes>
            <Route
              path="/"
              element={
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
                        onMoreInfo={handleMoreInfo}
                        onAddToCart={handleAddToCart}
                        price={7.99}
                      />
                    ))}
                  </div>
                  {activeProductId && (
                    <ProductDetails
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      product={Products.find(
                        (product) => product.id === activeProductId
                      )}
                      onAddToCart={handleAddToCart}
                    />
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
