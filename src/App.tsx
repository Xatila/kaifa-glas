import { useEffect, useState } from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import { CartItemsProps } from "./components/CartItems";
import { AppContext } from "./contexts/AppContext";
import { scrollToTop } from "./Helpers/ScrollToTop";
import RoutesContainer from "./components/RoutesContainer";

function App() {
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [data, setData] = useState<CartItemsProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <AppContext.Provider
      value={{
        activeProductId,
        setActiveProductId,
        data,
        setData,
        isModalOpen,
        setIsModalOpen,
        toast,
      }}
    >
      <ChakraProvider>
        <BrowserRouter>
          <CustomNavbar />
          <RoutesContainer />
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default App;
