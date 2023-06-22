import { useToast } from "@chakra-ui/react";

interface Props {
  productHeading: string;
}

const Toast = ({ productHeading }: Props) => {
  const toast = useToast();

  toast({
    title: "Стъклен протектор за " + productHeading,
    description: "Беше успешно добавен в количката",
    status: "success",
    duration: 2800,
    isClosable: true,
  });
};

export default Toast;
