import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { RiCloseCircleFill } from "react-icons/ri";
const SorryPage = () => {
  return (
    <Center h="60vh">
      <Box textAlign="center">
        <Flex direction="column" align="center">
          <RiCloseCircleFill size={80} color={"red"} />
        </Flex>
        <Heading as="h1" size="xl" mb={4} me={3}>
          Невалидна поръчка
        </Heading>
        <Text marginEnd={1.5} fontSize="lg">
          Съжаляваме, но поръката Ви бе невалидна, поради празна количка или невалидни данни. Свържете се с нас за повече информация.
        </Text>
      </Box>
    </Center>
  );
};

export default SorryPage;
