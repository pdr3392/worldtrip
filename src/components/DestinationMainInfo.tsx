import { Box, Flex, Stack, Text } from "@chakra-ui/react";
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
      maxWidth={{
        base: "250px",
        sm: "426px",
        md: "520px",
        lg: "720px",
        xl: "900px",
      }}
      ml={{ base: "auto", md: "auto", lg: "5.5rem", xl: "9rem" }}
      mr="auto"
      mb={{ lg: "44", xl: "10" }}
      align={{ md: "flex-start", lg: "center" }}
      direction={{ base: "column", sm: "column", md: "row" }}
      spacing={{ base: "1rem", sm: "24", md: "7rem", lg: "3.5rem", xl: "7rem" }}
      whiteSpace="normal"
    >
      <Text
        maxWidth={{ base: 250, sm: 426, md: 400, lg: 500, xl: 600 }}
        maxHeight={211}
        textAlign="justify"
        fontSize={{
          base: "0.875rem",
          sm: "1.3rem",
          md: "1rem",
          lg: "1.5rem",
        }}
        fontWeight="400"
        lineHeight={["1.313rem", "2.25rem"]}
        color="gray.900"
      >
        {mainInfo}
      </Text>

      <Stack
        direction={{ base: "row", md: "column", lg: "row", xl: "row" }}
        spacing={{ base: "10", md: "2.625rem" }}
        justify="flex-start"
        maxWidth={{ base: "270px", md: "250px", lg: "343px", xl: "343px" }}
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
