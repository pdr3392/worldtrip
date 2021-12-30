import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  continent: string;
  info: string;
  uid: string;
}

export default function CarouselItem({
  uid,
  continent,
  info,
}: CarouselItemProps) {
  return (
    <Link href={`/${uid}`} passHref>
      <ChakraLink style={{ textDecoration: "none" }}>
        <Box mt="2.5rem">
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="3rem"
            lineHeight="4.5rem"
            color="gray.200"
          >
            {continent}
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="1.5rem"
            lineHeight="2.25rem"
            color="gray.200"
          >
            {info}
          </Text>
        </Box>
      </ChakraLink>
    </Link>
  );
}
