import { Flex, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface DestinationSmallInfoProps {
  highlight: string;
  info: string;
  infoIcon: boolean;
}

export default function DestinationSmallInfo({
  highlight,
  info,
  infoIcon,
}: DestinationSmallInfoProps) {
  return (
    <Flex direction="column" align="center">
      <Text
        color="yellow.500"
        fontSize="3rem"
        fontWeight="600"
        lineHeight="4.5rem"
      >
        {highlight}
      </Text>
      <Flex direction="row" align="center">
        <Text
          color="gray.900"
          fontSize="1.5rem"
          fontWeight="600"
          lineHeight="2.25rem"
        >
          {info}
        </Text>
        {infoIcon && (
          <InfoOutlineIcon
            ml="0.375rem"
            color="gray.600"
            opacity="50%"
            size="0.8rem"
          />
        )}
      </Flex>
    </Flex>
  );
}
