import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack marginLeft={3} marginBottom={-2}>
      <Text mt={3} color={"white"}>Тъмна тема</Text>
      <Switch
      colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      
    </HStack>
  );
};

export default ColorModeSwitch;
