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
import { GetStaticProps } from "next";
import Head from "next/head";
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
    md: true,
  });

  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>

      <Flex
        direction="column"
        bgColor="gray.200"
        align="center"
        maxWidth={{ base: "100vw", xl: "100%" }}
        overflow="hidden"
      >
        <Header needBackward={false} />

        <Flex
          direction="column"
          align="center"
          maxWidth={{ base: 479, sm: 767, md: 1023, lg: 1439, xl: 1440 }}
        >
          <Box
            w="100%"
            align="center"
            mb={{ base: "5", sm: "12", md: "14", lg: "20", xl: "20" }}
          >
            {isWideVersion ? (
              <Image w="100vw" src="/images/Banner.svg" alt="Banner" />
            ) : (
              <Image w="100%" src="/images/mobileBanner.svg" alt="Banner" />
            )}
          </Box>

          <Flex w="100%" justify="center">
            <Wrap
              justify="center"
              w={{
                base: "85%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
              spacing={{ base: "7", sm: "16", md: "14", lg: "32", xl: "32" }}
              direction="row"
              m={{ base: "auto", sm: "7", md: "8", lg: "35", xl: "35" }}
              mb={{ base: "12", md: "16", lg: "32", xl: "32" }}
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

          <Stack
            spacing={{ base: "1.25rem", md: "8", lg: "10", xl: "14" }}
            align="center"
            mb={{ base: "3", md: "4", lg: "6", xl: "10" }}
          >
            <Box
              w={{ base: "60px", md: "70px", lg: "90px", xl: "90px" }}
              border={{
                base: "1px solid rgba(71, 88, 91, 0.8)",
                md: "1px solid #47585B",
                lg: "2px solid #47585B",
                xl: "2px solid #47585B",
              }}
            />

            <Stack as="div" align="center">
              <Text
                fontSize={{
                  base: "1.25rem",
                  md: "1.6rem",
                  lg: "1.85rem",
                  xl: "2.25rem",
                }}
                fontWeight="500"
                lineHeight={{
                  base: "1.875rem",
                  md: "1.875rem",
                  lg: "1.25rem",
                  xl: "1",
                }}
                color="gray.900"
              >
                Vamos nessa?
              </Text>
              <Text
                fontSize={{
                  base: "1.25rem",
                  md: "1.6rem",
                  lg: "2rem",
                  xl: "2.25rem",
                }}
                fontWeight="500"
                lineHeight={{ base: "1.875rem", md: "2", lg: "2", xl: "2" }}
                color="gray.900"
              >
                Então escolha seu continente
              </Text>
            </Stack>

            <SwiperCarousel continents={continents} />
          </Stack>
        </Flex>
      </Flex>
    </>
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
