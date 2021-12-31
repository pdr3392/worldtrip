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
    <Stack maxWidth={1160} ml="auto" mr="auto" direction="row" spacing="4.5rem">
      <Text
        maxWidth={600}
        maxHeight={211}
        textAlign="justify"
        fontSize="1.5rem"
        fontWeight="400"
        lineHeight="2.25rem"
      >
        {mainInfo}
      </Text>

      {lgInfo.map((info) => (
        <DestinationSmallInfo
          key={info.info}
          highlight={info.highlight}
          info={info.info}
          infoIcon={info.infoIcon}
        />
      ))}
    </Stack>
  );
}
