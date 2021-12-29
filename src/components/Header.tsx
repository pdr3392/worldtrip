import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface HeaderProps {
  needBackward: boolean;
}

export default function Header({ needBackward }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      minHeight="100px"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.200"
    >
      {needBackward && (
        <Box ml="36" as="button" position="absolute" left="0">
          <Link href="/" passHref>
            <ChakraLink>
              <ChevronLeftIcon h="8" w="8" />
            </ChakraLink>
          </Link>
        </Box>
      )}
      <img src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
}
