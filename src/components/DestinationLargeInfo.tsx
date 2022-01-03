import {
  Box,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  Image,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface DestinationLargeInfoProps {
  folderPath: string;
  city: string;
  country: string;
  elipseCountry: string;
}

export default function DestinationLargeInfo({
  folderPath,
  city,
  country,
  elipseCountry,
}: DestinationLargeInfoProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      _hover={{ cursor: "pointer", outline: "1px solid rgb(255, 186, 8)" }}
      position="relative"
      borderRadius="4"
      outline="1px solid rgba(255, 186, 8, 0.5)"
      outlineOffset="-1px"
      w={["300", "16rem"]}
      h="17.438rem"
      minWidth="256px"
      mb={!isWideVersion ? "5" : "auto"}
    >
      <Box
        position="absolute"
        borderTopRadius="4"
        overflow="hidden"
        maxWidth="256px"
        maxHeight="173px"
      >
        <Image src={folderPath} alt={city} />
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
        <Box
          position="absolute"
          left="11rem"
          width="1.875rem"
          height="1.875rem"
        >
          <ReactCountryFlag
            className="emojiFlag"
            countryCode={elipseCountry}
            svg
            style={{
              border: "0.2px solid #F5F8FA",
              objectFit: "cover",
              height: "1.875rem",
              width: "1.875rem",
              borderRadius: "100%",
            }}
            aria-label={elipseCountry}
          />
        </Box>
      </Stack>
    </Box>
  );
}
