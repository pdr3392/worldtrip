import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Europe() {
  return (
    <Flex direction="column" align="center" h="100vh">
      <Header needBackward />

      <Flex direction="column" maxWidth={1440} w="100%">
        <Box as="div" mb="20">
          <img src="/images/europeBanner.svg" alt="Banner" />
        </Box>
      </Flex>
    </Flex>
  );
}
