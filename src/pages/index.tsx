import {
  Box,
  Center,
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
        <Box w="100%" as="div" mb={["5", "20"]}>
          {isWideVersion ? (
            <img src="/images/Banner.svg" alt="Banner" />
          ) : (
            <Image
              w="375px"
              h="163px"
              src="/images/mobileBanner.svg"
              alt="Banner"
            />
          )}
        </Box>

        <Flex justify="center">
          <Wrap
            justify="center"
            w={["85%", "100%"]}
            spacing={["7", "32"]}
            direction={["row"]}
            m={["auto", "35"]}
            mb={["12", "32"]}
          >
            <WrapItem>
              <Center w="136px" h="21px">
                <BodyIcon filename="cocktail" info="vida noturna" />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="136px" h="21px">
                <BodyIcon filename="surf" info="praia" />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="136px" h="21px">
                <BodyIcon filename="building" info="moderno" />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="136px" h="21px">
                <BodyIcon filename="museum" info="clássico" />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="136px" h="21px">
                <BodyIcon filename="earth" info="e mais..." />
              </Center>
            </WrapItem>
          </Wrap>
        </Flex>

        <Stack spacing={["1.25rem", "14"]} align="center" mb={["0", "10"]}>
          <Box
            w={["60px", "90px"]}
            border={["1px solid rgba(71, 88, 91, 0.8)", "2px solid #47585B"]}
          />

          <Stack as="div" align="center">
            <Text
              fontSize={["1.25rem", "2.25rem"]}
              fontWeight="500"
              lineHeight={["1.875rem", "14"]}
              color="gray.900"
            >
              Vamos nessa?
            </Text>
            <Text
              fontSize={["1.25rem", "2.25rem"]}
              fontWeight="500"
              lineHeight={["1.875rem", "14"]}
              color="gray.900"
            >
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
