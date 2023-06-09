import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { BsCheck2Circle } from "react-icons/bs";
import OrderButton from "./OrderButton/OrderButton";
const ThankYouPage = () => {
  return (
    <Center h="60vh">
      <Box textAlign="center">
        <Flex direction="column" align="center">
          <BsCheck2Circle size={80} color={"green"} />
        </Flex>
        <OrderButton />
        <Heading as="h1" size="xl" mb={4} me={2}>
          Благодарим за вашето доверие!
        </Heading>
        <Text marginEnd={2} fontSize="lg">
          Ценим всеки наш клиент. Очквайте обаждане за потвърждаване на
          поръчката и уточнение за доставка до няколко часа.
        </Text>
      </Box>
    </Center>
  );
};

export default ThankYouPage;
