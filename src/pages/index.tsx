import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import BodyIcon from "../components/BodyIcon";
import Header from "../components/Header";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

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

          <Box h="28.125rem" w="77.5rem">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              className="mySwiper"
            >
              <SwiperSlide
                style={{
                  "background-image": "url('/images/EuropeSwiper.svg')",
                }}
              >
                <Box mt="2.5rem">
                  <Text
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="3rem"
                    lineHeight="4.5rem"
                    color="gray.200"
                  >
                    Europa
                  </Text>
                  <Text
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="1.5rem"
                    lineHeight="2.25rem"
                    color="gray.200"
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </SwiperSlide>

              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
}
