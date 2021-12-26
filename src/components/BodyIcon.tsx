import { Image, Flex, Text } from "@chakra-ui/react";

interface BodyIconProps {
  filename: string;
  info: string;
}

export default function bodyIcon({ filename, info }: BodyIconProps) {
  return (
    <Flex direction="column" align="center">
      <Image
        height={"5.31rem"}
        width={"5.31rem"}
        src={`/images/${filename}.svg`}
        alt={filename}
      />
      <Text fontWeight="600" mt="6">
        {info}
      </Text>
    </Flex>
  );
}
