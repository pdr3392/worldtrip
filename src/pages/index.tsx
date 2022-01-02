import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import BodyIcon from "../components/BodyIcon";
import Header from "../components/Header";
import SwiperCarousel from "../components/SwiperCarousel";
import api from "../services/api";

interface HundredCitiesProps {
  city: string;
  country: string;
  elipseCountry: string;
  folderPath: string;
}

interface ContinentLargeItemsProps {
  highlight: string;
  info: string;
  infoIcon: boolean;
}

interface ContinentProps {
  name: string;
  uid: string;
  continentBanner: string;
  lgInfo: string;
  callToAction: string;
  swiperImage: string;
  lgItems: ContinentLargeItemsProps[];
  hundredCities: HundredCitiesProps[];
}

interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({ continents }: HomeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" align="center" w={["100vw", "100%"]}>
      <Header needBackward={false} />

      <Flex
        direction="column"
        align="center"
        maxWidth={[375, 1440]}
        bgColor="gray.200"
      >
        <Box w="100%" as="div" mb={["9", "20"]}>
          {isWideVersion ? (
            <img src="/images/Banner.svg" alt="Banner" />
          ) : (
            <img src="/images/mobileBanner.svg" alt="Banner" />
          )}
        </Box>

        <Flex>
          <Wrap
            justify="center"
            w="100%"
            spacing={["7", "32"]}
            direction={["column", "row"]}
            m={["3", "35"]}
            mb={["3", "20"]}
          >
            <WrapItem>
              <BodyIcon filename="cocktail" info="vida noturna" />
            </WrapItem>
            <WrapItem>
              <BodyIcon filename="surf" info="praia" />
            </WrapItem>
            <WrapItem>
              <BodyIcon filename="building" info="moderno" />
            </WrapItem>
            <WrapItem>
              <BodyIcon filename="museum" info="clássico" />
            </WrapItem>

            <WrapItem>
              <BodyIcon filename="earth" info="e mais..." />
            </WrapItem>
          </Wrap>
        </Flex>

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

          <SwiperCarousel continents={continents} />
        </Stack>
      </Flex>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await api.get("/continents").then((res) => res.data);
  const parsedContinents: ContinentProps[] = [];

  result.map((continent: ContinentProps) => parsedContinents.push(continent));

  return {
    props: {
      continents: parsedContinents,
    },
    revalidate: 60 * 60 * 24,
  };
};
