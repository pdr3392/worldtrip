import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import BodyIcon from "../components/BodyIcon";
import Header from "../components/Header";
import SwiperCarousel from "../components/SwiperCarousel";

export default function Home() {
  return (
    <Flex direction="column" align="center" h="100vh">
      <Header needBackward={false} />

      <Flex direction="column" maxWidth={1440} w="100%" bgColor="gray.200">
        <Box as="div" mb="20">
          <img src="/images/Banner.svg" alt="Banner" />
        </Box>

        <Stack
          spacing="32"
          direction="row"
          m="35"
          mb="20"
          justifyContent="center"
        >
          <BodyIcon filename="cocktail" info="vida noturna" />
          <BodyIcon filename="surf" info="praia" />
          <BodyIcon filename="building" info="moderno" />
          <BodyIcon filename="museum" info="clássico" />
          <BodyIcon filename="earth" info="e mais..." />
        </Stack>

        <Stack spacing="14" align="center" mb="10">
          <Image src="/images/Divider.svg" h="0.5" w="90" />

          <Stack as="div" align="center">
            <Text as="h2" fontSize="2.25rem" fontWeight="500">
              Vamos nessa?
            </Text>
            <Text as="h2" fontSize="2.25rem" fontWeight="500">
              Então escolha seu continente
            </Text>
          </Stack>

          <SwiperCarousel />
        </Stack>
      </Flex>
    </Flex>
  );
}
