import { Box, Center, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import DestinationLargeInfo from "../../components/DestinationLargeInfo";
import DestinationMainInfo from "../../components/DestinationMainInfo";
import Header from "../../components/Header";
import api from "../../services/api";

interface ParamsProps {
  continent: string;
}

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
    <Flex direction="column" align="center" h="100vh">
      <Header needBackward />

      <Flex direction="column" maxWidth={1440} w="100%" bgColor="gray.200">
        <Box
          position="relative"
          as="div"
          maxWidth="1440"
          maxHeight="500"
          overflow="hidden"
          mb="20"
        >
          <Text
            margin="23rem auto 3.75rem 8.75rem"
            position="absolute"
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="3rem"
            lineHeight="4.5rem"
            color="gray.200"
            textShadow="7px -4px 6px rgba(0,0,0,0.92)"
          >
            {continent.name}
          </Text>
          <img src={continent.continentBanner} alt="Banner" />
        </Box>

        <DestinationMainInfo
          mainInfo={continent.lgInfo}
          lgInfo={continent.lgItems}
        />

        <Box mt="20" maxWidth={1160} ml="auto" mr="auto" mb="9">
          <Text
            fontWeight="500"
            mb="10"
            fontSize="2.25rem"
            lineHeight="3.375rem"
          >
            Cidades +100
          </Text>
          <Wrap spacing="2.813rem">
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
