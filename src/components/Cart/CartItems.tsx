import { Box, Text, Image, Flex, HStack } from "@chakra-ui/react";

export interface CartItemsProps {
  id: number;
  picture: string;
  heading: string;
  count: number;
}
const CartItems = ({ id, picture, heading, count }: CartItemsProps) => {
  return (
    <Flex key={id} align="center">
      <Image src={picture} alt="Image" boxSize="100px" />
      <Box marginLeft="10px">
        <Text>
          {heading}
          <strong className="quantity"> {count}бр.</strong>
        </Text>
        <HStack style={{ padding: 10 }}></HStack>
      </Box>
    </Flex>
  );
};

export default CartItems;
