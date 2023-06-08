import { Flex, Heading, Highlight, Text, Image } from "@chakra-ui/react";
import freeShipping from "../pictures/free-shipping-removebg-preview.png";

const FreeDelivery = () => {
  return (
    <div>
      <Heading marginLeft={3} marginTop={100} lineHeight="tall">
        <Text fontSize={24}>
          <Highlight
            query={["Студентски град", "Велинград!"]}
            styles={{
              px: "1.6",
              py: "1",
              rounded: "",
              bg: "blue.200",
            }}
          >
            Безплатна доставка за Студентски град и Велинград!
          </Highlight>
          <Flex justifyContent={"center"}>
            <Image width={150} src={freeShipping} />
          </Flex>
        </Text>
      </Heading>
    </div>
  );
};

export default FreeDelivery;
