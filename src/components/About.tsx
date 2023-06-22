import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { AboutText, getAboutImages } from "../Helpers/AboutHelper";
import widePic from "../pictures/wide.jpg";
import ExpandableText from "./ExpandableText";
import { useEffect, useMemo } from "react";
import { scrollToTop } from "../Helpers/ScrollToTop";

const About = () => {
  const images = useMemo(() => getAboutImages(), []);

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
        {!!images?.length &&
          images.map(({ src, alt }) => (
            <Box key={alt} w={{ base: "100%", sm: "50%" }}>
              <Image src={src} alt={alt} mx="auto" display={{ md: "block" }} />
            </Box>
          ))}
      </Flex>
    </Box>
  );
};

export default About;
