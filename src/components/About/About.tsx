import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { AboutText } from "../AboutText";
import picture1 from "../../pictures/aboutPic1.jpg";
import picture2 from "../../pictures/aboutPic2.jpg";
import widePic from "../../pictures/wide.jpg";
import ExpandableText from "./ExpandableText";
import giff from "../../pictures/Aboutgiff.gif";
import { useEffect } from "react";
import { scrollToTop } from "../../Helpers/ScrollToTop";

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Box mt={"60px"}>
      <Image
        src={widePic}
        alt="Wide Picture"
        mb={5}
        mx="auto"
        display={{ md: "block" }}
      />

      <Box padding={3} mb={5} textAlign="center">
        <Heading mb={5} as="h1" size="xl">
          Какво е KAIFA Glass
        </Heading>
        <ExpandableText children={AboutText}></ExpandableText>
      </Box>

      <Flex
        direction={{ base: "column", sm: "row" }}
        align="center"
        justify="center"
        wrap="wrap"
      >
        <Box w={{ base: "100%", sm: "50%" }}>
          <Image
            src={picture1}
            alt="Picture 1"
            mx="auto"
            display={{ md: "block" }}
          />
        </Box>
        <Box w={{ base: "100%", sm: "50%" }}>
          <Image
            src={picture2}
            alt="Picture 2"
            mx="auto"
            display={{ md: "block" }}
          />
        </Box>
        <Box w={{ base: "100%", sm: "50%" }}>
          <Image
            src={giff}
            alt="Picture 2"
            mx="auto"
            display={{ md: "block" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
