import { Flex, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
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
    <Flex direction="column" align="center">
      <Text
        color="yellow.500"
        fontSize="3rem"
        fontWeight="600"
        lineHeight="4.5rem"
      >
        {highlight}
      </Text>
      <Flex align="center" justify="center">
        <Text
          whiteSpace="nowrap"
          textAlign="center"
          color="gray.900"
          fontSize="1.5rem"
          fontWeight="600"
          lineHeight="2.25rem"
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
                size="0.8rem"
              />
            </PopoverTrigger>
            <PopoverContent
              align="center"
              m="0.8rem"
              width="180px"
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
