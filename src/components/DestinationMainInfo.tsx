import { Stack, Text } from "@chakra-ui/react";
import DestinationSmallInfo from "./DestinationSmallInfo";

export default function DestinationMainInfo() {
  return (
    <Stack maxWidth={1160} ml="auto" mr="auto" direction="row" spacing="4.5rem">
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
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <DestinationSmallInfo highlight="50" info="países" infoIcon={false} />
      <DestinationSmallInfo highlight="60" info="línguas" infoIcon={false} />
      <DestinationSmallInfo highlight="27" info="cidades +100" infoIcon />
    </Stack>
  );
}
