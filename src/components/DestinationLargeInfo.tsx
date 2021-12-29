import { Box, Stack, Text, VStack } from "@chakra-ui/react";

export default function DestinationLargeInfo() {
  return (
    <Box
      position="relative"
      borderRadius="4"
      outline="1px solid #FFBA08"
      outlineOffset="-1px"
      w="16rem"
      h="17.438rem"
    >
      <Box position="absolute">
        <img src="/images/LondonFolder.svg" alt="London" />
      </Box>

      <Stack
        position="absolute"
        spacing="6.5rem"
        direction="row"
        mt="48"
        ml="3"
        align="center"
      >
        <VStack align="flex-start">
          <Text
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="1.25rem"
            LineHeight="1.563rem"
            color="gray.900"
          >
            Londres
          </Text>
          <Text
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="1rem"
            LineHeight="1.625rem"
            color="gray.600"
          >
            Reino Unido
          </Text>
        </VStack>
        <Box w="1.875rem" h="1.875rem">
          <img src="/images/UkElipse.svg" alt="United Kingdom" />
        </Box>
      </Stack>
    </Box>
  );
}
