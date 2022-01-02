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
      whiteSpace="no-break"
      display="inline"
      align="center"
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
          borderRadius="50%"
        ></Box>
      )}
      <Text fontWeight="600" mt="6">
        {info}
      </Text>
    </Flex>
  );
}
