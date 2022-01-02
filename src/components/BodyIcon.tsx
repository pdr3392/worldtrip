import { Image, Flex, Text, useBreakpointValue, Box } from "@chakra-ui/react";

interface BodyIconProps {
  filename: string;
  info: string;
}

export default function bodyIcon({ filename, info }: BodyIconProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction={["row", "column"]}
      maxWidth={["275", "1160"]}
      align={["baseline", "center"]}
    >
      {isWideVersion ? (
        <Image
          height={"5.31rem"}
          width={"5.31rem"}
          src={`/images/${filename}.svg`}
          alt={filename}
        />
      ) : (
        <Box
          backgroundColor="yellow.500"
          w="0.5rem"
          h="0.5rem"
          mr="0.5rem"
          borderRadius="50%"
        ></Box>
      )}
      <Text
        whiteSpace="nowrap"
        fontWeight={["500", "600"]}
        color="gray.900"
        mt="6"
        fontSize={["1.125rem", "1.5rem"]}
        lineHeight={["1.688rem", "2.25rem"]}
      >
        {info}
      </Text>
    </Flex>
  );
}
