import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
  continent: string;
  info: string;
  uid: string;
}

export default function CarouselItem({
  continent,
  uid,
  info,
}: CarouselItemProps) {
  return (
    <Link href={`/continents/${uid}`} passHref>
      <ChakraLink style={{ textDecoration: "none" }}>
        <Box
          mt={{
            base: "1.5rem",
            sm: "2.5rem",
            md: "2.5rem",
            lg: "2.5rem",
            xl: "2.5rem",
          }}
        >
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            fontSize={{
              base: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "2.8rem",
              xl: "3rem",
            }}
            lineHeight={{
              base: "2.25rem",
              sm: "2.8rem",
              md: "3.5rem",
              lg: "4rem",
              xl: "4.5rem",
            }}
            color="gray.200"
          >
            {continent}
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="700"
            fontSize={{
              base: "0.7rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
              xl: "1.5rem",
            }}
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
