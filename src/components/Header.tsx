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
        <Link href="/" passHref>
          <ChakraLink>
            <Box ml="36" as="button" position="absolute" left="0">
              <ChevronLeftIcon h="8" w="8" />
            </Box>
          </ChakraLink>
        </Link>
      )}
      <img src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
}
