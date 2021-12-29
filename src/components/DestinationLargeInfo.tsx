import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/core";

interface DestinationLargeInfoProps {
  folderPath: string;
  city: string;
  country: string;
  elipsePath: string;
}

export default function DestinationLargeInfo({
  folderPath,
  city,
  country,
  elipsePath,
}: DestinationLargeInfoProps) {
  return (
    <Box
      _hover={{ cursor: "pointer", outline: "1px solid rgb(255, 186, 8)" }}
      position="relative"
      borderRadius="4"
      outline="1px solid rgba(255, 186, 8, 0.5)"
      outlineOffset="-1px"
      w="16rem"
      h="17.438rem"
    >
      <Box position="absolute">
        <img src={`/images/${folderPath}.svg`} alt="London" />
      </Box>

      <Stack position="absolute" direction="row" mt="48" ml="3" align="center">
        <VStack align="flex-start">
          <Text
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="1.25rem"
            lineHeight="1.563rem"
            color="gray.900"
          >
            {city}
          </Text>
          <Text
            whiteSpace="nowrap"
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="1rem"
            lineHeight="1.625rem"
            color="gray.600"
          >
            {country}
          </Text>
        </VStack>
        <Box position="absolute" left="11rem" w="1.875rem" h="1.875rem">
          <img src={`/images/${elipsePath}.svg`} alt="United Kingdom" />
        </Box>
      </Stack>
    </Box>
  );
}
