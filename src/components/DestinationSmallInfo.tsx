import { Flex, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

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
    <Flex
      direction="column"
      align={{ base: "flex-start", sm: "center", md: "center" }}
      maxWidth={["120", "490"]}
    >
      <Text
        color="yellow.500"
        fontSize={{ base: "1.5rem", sm: "3rem", md: "3rem" }}
        fontWeight="600"
        lineHeight={["2.25rem", "4.5rem"]}
      >
        {highlight}
      </Text>
      <Flex align="center" justify="center">
        <Text
          whiteSpace="nowrap"
          textAlign="center"
          color="gray.900"
          fontSize={{ base: "0.8rem", sm: "1.125rem", md: "1.5rem" }}
          fontWeight={["400", "600"]}
          lineHeight={["1.688rem", "2.25rem"]}
        >
          {info}
        </Text>
        {infoIcon && (
          <Popover>
            <PopoverTrigger>
              <InfoOutlineIcon
                _hover={{ color: "yellow.500", cursor: "pointer" }}
                ml="0.375rem"
                color="gray.600"
                opacity="50%"
                h={["0.813rem", "1rem"]}
                w={["0.813rem", "1rem"]}
              />
            </PopoverTrigger>
            <PopoverContent
              align="center"
              m="0.8rem"
              width={["180px", "150px"]}
              borderColor="gray.400"
            >
              <PopoverArrow />
              <PopoverBody mt="10px">
                Cidades que estão entre os 100 destinos mais visitados do mundo!
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Flex>
  );
}
