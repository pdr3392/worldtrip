import { Box, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  needBackward: boolean;
}

/* export default function Header({ needBackward }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      minHeight="100px"
      alignItems="center"
      justifyContent="center"
    >
      <img src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
} */

export default function Header({ needBackward }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      minHeight="100px"
      alignItems="center"
      justifyContent="center"
    >
      {needBackward && (
        <Box ml="36" as="button" position="absolute" left="0">
          <ChevronLeftIcon h="8" w="8" />
        </Box>
      )}
      <img src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
}
