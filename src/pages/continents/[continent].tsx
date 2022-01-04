import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import Head from "next/head";
import DestinationLargeInfo from "../../components/DestinationLargeInfo";
import DestinationMainInfo from "../../components/DestinationMainInfo";
import Header from "../../components/Header";
import api from "../../services/api";

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

interface CurrentContinentProps {
  continent: ContinentProps;
}

export default function Continent({ continent }: CurrentContinentProps) {
  return (
    <>
      <Head>
        <title>WorldTrip | {continent.name}</title>
      </Head>

      <Flex
        bgColor="gray.200"
        direction="column"
        align="center"
        maxWidth="100vw"
        overflow="hidden"
      >
        <Header needBackward />

        <Flex
          direction="column"
          maxWidth={{ base: 425, sm: 767, md: 1023, lg: 1439, xl: 1440 }}
          w="100vw"
        >
          <Box
            position="relative"
            as="div"
            maxWidth={{ base: 425, sm: 767, md: 1023, lg: 1439, xl: 1440 }}
            maxHeight={{ base: 150, sm: 250, md: 500 }}
            overflow="hidden"
            mb={{ base: "5", sm: "10", md: "8", lg: "10", xl: "20" }}
          >
            <Text
              margin={{
                base: "4rem auto auto 6.5rem",
                sm: "6rem auto auto 10.1rem",
                md: "7rem auto auto 10.5rem",
                lg: "23rem auto 3.75rem 5rem",
                xl: "23rem auto 3.75rem 8.5rem",
              }}
              position="absolute"
              fontFamily="Poppins"
              fontWeight="600"
              fontSize={["1.75rem", "3rem"]}
              lineHeight={["2.625rem", "4.5rem"]}
              color="gray.200"
              textShadow="7px -4px 6px rgba(0,0,0,0.92)"
            >
              {continent.name}
            </Text>
            <Image src={continent.continentBanner} alt="Banner" />
          </Box>

          <DestinationMainInfo
            mainInfo={continent.lgInfo}
            lgInfo={continent.lgItems}
          />

          <Box
            ml={{
              base: "2rem",
              sm: "6.5rem",
              md: "6.5rem",
              lg: "5rem",
              xl: "8.75rem",
            }}
            maxWidth={{ base: "375px", lg: "975px", xl: "1160px" }}
          >
            <Text
              mt={["5", "20"]}
              fontWeight="500"
              mb={["1.25rem", "10"]}
              color="green.900"
              fontSize={["1.5rem", "2.25rem"]}
              lineHeight="3.375rem"
            >
              Cidades +100
            </Text>
          </Box>

          <Box
            mt={["0.25rem", "0.5rem"]}
            width="100%"
            direction={["row", "column"]}
            maxWidth={{
              base: "256px",
              md: "560px",
              lg: "860px",
              xl: "1160px",
            }}
            ml={{ base: "auto", lg: "5rem", xl: "8.5rem" }}
            mr={{ base: "auto", lg: "auto", xl: "auto" }}
            mb={["2", "2rem"]}
          >
            <Wrap spacing={["0", "2.813rem"]}>
              {continent.hundredCities.map((city) => (
                <WrapItem key={city.city}>
                  <Center>
                    <DestinationLargeInfo
                      city={city.city}
                      country={city.country}
                      folderPath={city.folderPath}
                      elipseCountry={city.elipseCountry}
                    />
                  </Center>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { continent } = params;

  const result = await api.get(`/continents?uid=${continent}`);

  const finalContinent: ContinentProps = result.data[0];

  if (!finalContinent) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      continent: finalContinent,
    },
  };
};
