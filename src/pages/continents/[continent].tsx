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
    <Flex direction="column" align="center" maxWidth={["375px", "1440px"]}>
      <Header needBackward />

      <Flex
        direction="column"
        maxWidth={[375, 1440]}
        w="100%"
        bgColor="gray.200"
      >
        <Box
          position="relative"
          as="div"
          maxWidth={["375", "1440"]}
          maxHeight={["150", "500"]}
          overflow="hidden"
          mb={["5", "20"]}
        >
          <Text
            margin={[
              "3.5rem 8.563rem 3.5rem 8.563rem",
              "23rem auto 3.75rem 8.5rem",
            ]}
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

        {/* TERMINAR */}
        <Box ml={["1rem", "5.75rem"]} maxWidth={["375px", "1160px"]}>
          <Text
            fontWeight="500"
            mb={["1.25rem", "10"]}
            mt={["5", "20"]}
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
          maxWidth={["256px", "1160px"]}
          ml="auto"
          mr="auto"
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
