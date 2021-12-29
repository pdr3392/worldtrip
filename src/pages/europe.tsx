import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import DestinationLargeInfo from "../components/DestinationLargeInfo";
import DestinationSmallInfo from "../components/DestinationSmallInfo";
import Header from "../components/Header";

export default function Europe() {
  return (
    <Flex direction="column" align="center" h="100vh">
      <Header needBackward />

      <Flex direction="column" maxWidth={1440} w="100%" bgColor="gray.200">
        <Box as="div" mb="20">
          <img src="/images/europeBanner.svg" alt="Banner" />
        </Box>

        <Stack
          maxWidth={1160}
          ml="auto"
          mr="auto"
          direction="row"
          spacing="4.5rem"
        >
          <Text
            maxWidth={600}
            maxHeight={211}
            textAlign="justify"
            fontSize="1.5rem"
            fontWeight="400"
            lineHeight="2.25rem"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <DestinationSmallInfo highlight="50" info="países" infoIcon={false} />
          <DestinationSmallInfo
            highlight="60"
            info="línguas"
            infoIcon={false}
          />
          <DestinationSmallInfo highlight="27" info="cidades +100" infoIcon />
        </Stack>

        <Box mt="20" maxWidth={1160} ml="auto" mr="auto" mb="9">
          <Text fontWeight="500" fontSize="2.25rem" lineHeight="3.375rem">
            Cidades +100
          </Text>
          <Stack spacing="6">
            <Stack mt="10" direction="row" mb="9" spacing="2.813rem">
              <DestinationLargeInfo
                city="Londres"
                country="Reino Unido"
                folderPath="LondonFolder"
                elipsePath="UkElipse"
              />
              <DestinationLargeInfo
                city="Paris"
                country="França"
                folderPath="ParisFolder"
                elipsePath="FrElipse"
              />
              <DestinationLargeInfo
                city="Roma"
                country="Itália"
                folderPath="RomeFolder"
                elipsePath="ItElipse"
              />
              <DestinationLargeInfo
                city="Praga"
                country="República Tcheca"
                folderPath="PragueFolder"
                elipsePath="CzElipse"
              />
            </Stack>

            <Stack mt="10" direction="row" mb="9" spacing="2.813rem">
              <DestinationLargeInfo
                city="Amsterdã"
                country="Holanda"
                folderPath="AmsterdamFolder"
                elipsePath="NlElipse"
              />
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
