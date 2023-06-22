import { Box, HStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Cart from "./Cart/Cart";
import ProductsContainer from "./ProductsContainer";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

const RoutesContainer = () => {
  const { data, setData } = useContext(AppContext);

  return (
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
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RoutesContainer;
