import { Stack, Text } from "@chakra-ui/react";
import DestinationSmallInfo from "./DestinationSmallInfo";

interface ContinentLargeItemsProps {
  highlight: string;
  info: string;
  infoIcon: boolean;
}

interface DestinationMainInfoProps {
  mainInfo: string;
  lgInfo: ContinentLargeItemsProps[];
}

export default function DestinationMainInfo({
  mainInfo,
  lgInfo,
}: DestinationMainInfoProps) {
  return (
    <Stack
      maxWidth={["343px", "1160px"]}
      ml="auto"
      mr="auto"
      direction={["column", "row"]}
      spacing={["1rem", "8rem"]}
    >
      <Text
        maxWidth={600}
        maxHeight={211}
        textAlign="justify"
        fontSize={["0.875rem", "1.5rem"]}
        fontWeight="400"
        lineHeight={["1.313rem", "2.25rem"]}
        color="gray.900"
      >
        {mainInfo}
      </Text>

      <Stack
        direction="row"
        spacing="2.625rem"
        justify="flex-start"
        maxWidth="343px"
      >
        {lgInfo.map((info) => (
          <DestinationSmallInfo
            key={info.info}
            highlight={info.highlight}
            info={info.info}
            infoIcon={info.infoIcon}
          />
        ))}
      </Stack>
    </Stack>
  );
}
